import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip);

export { gsap, ScrollTrigger, Flip };

/* ---------------------------------------------------------------------------
   The whole motion layer lives here.

   With Astro's ClientRouter the <body> is swapped on every navigation, and
   ScrollTrigger / ScrollSmoother hold references to the DOM nodes that just
   got thrown away. If we don't tear those down, the second navigation leaves
   scrolling dead. So: one setup, one teardown, wired to the router events.
   --------------------------------------------------------------------------- */

const root = document.documentElement;

let mm: gsap.MatchMedia | null = null;
let smoother: ScrollSmoother | null = null;
let splits: SplitText[] = [];
/** Listeners bound to window/document, which survive the page swap. */
let cleanups: (() => void)[] = [];

/**
 * Last known pointer position. Kept outside setup/teardown on purpose: the
 * router swaps in a fresh #cursor at (0, 0) on every navigation, and without
 * this it would sit in the top-left corner until the mouse moved again.
 */
const pointer = { x: 0, y: 0, seen: false };
window.addEventListener(
  "pointermove",
  (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.seen = true;
  },
  { passive: true },
);

function placeCursor(dot: HTMLElement | null) {
  if (dot && pointer.seen) gsap.set(dot, { x: pointer.x, y: pointer.y });
}

function listen<K extends keyof WindowEventMap>(
  target: Window | Document,
  type: K,
  fn: (e: WindowEventMap[K]) => void,
) {
  target.addEventListener(type, fn as EventListener);
  cleanups.push(() => target.removeEventListener(type, fn as EventListener));
}

function teardown() {
  splits.forEach((s) => s.revert());
  splits = [];
  // mm.revert() reverts every animation created inside its context.
  mm?.revert();
  mm = null;
  ScrollTrigger.getAll().forEach((st) => st.kill());
  smoother?.kill();
  smoother = null;
  cleanups.forEach((fn) => fn());
  cleanups = [];
}

function setup() {
  // Tells the head failsafe that the bundle booted, so it stops counting down.
  root.dataset.motionReady = "1";

  mm = gsap.matchMedia();

  mm.add(
    {
      animate: "(prefers-reduced-motion: no-preference)",
      fine: "(pointer: fine)",
    },
    (ctx) => {
      const { animate, fine } = ctx.conditions as {
        animate: boolean;
        fine: boolean;
      };

      if (!animate) {
        // Reduced motion: show everything immediately and build nothing else.
        root.removeAttribute("data-motion");
        gsap.set("[data-reveal]", { clearProps: "all" });
        return;
      }

      root.dataset.motion = "on";

      smoothScroll();
      reveals();
      pipeline();
      progress();
      if (fine) {
        cursor();
        magnets();
      }

      // ScrollTrigger measures on creation; webfonts land later and change
      // every text height. One refresh after fonts settle avoids triggers
      // firing at the wrong scroll position.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
  );
}

/* -------------------------------------------------------------------------- */

function smoothScroll() {
  if (!document.getElementById("smooth-wrapper")) return;

  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.1,
    effects: true, // enables data-speed / data-lag on any element
    smoothTouch: 0, // native scroll on touch — inertia there feels wrong
  });

  // ScrollSmoother transforms the content, so the browser's own
  // "scroll the focused element into view" lands in the wrong place. Without
  // this, tabbing through the page appears to do nothing.
  listen(document, "focusin", (e) => {
    const el = e.target as HTMLElement | null;
    if (!el || !smoother) return;
    const box = el.getBoundingClientRect();
    if (box.top < 0 || box.bottom > window.innerHeight) {
      smoother.scrollTo(el, false, "center center");
    }
  });
}

/**
 * Declarative reveals. Markup opts in with an attribute; nothing here needs
 * to know which page it is on.
 *
 *   data-reveal            fade + rise
 *   data-reveal="lines"    per-line, masked (for display type)
 *   data-reveal="chars"    per-character (short headings only)
 *   data-reveal-stagger    stagger the element's direct children instead
 */
function reveals() {
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    const mode = el.dataset.reveal;
    const trigger = { trigger: el, start: "top 88%", once: true };

    if (mode === "lines" || mode === "chars") {
      gsap.set(el, { opacity: 1 });
      const type = mode === "lines" ? "lines" : "chars,lines";
      splits.push(
        SplitText.create(el, {
          type,
          mask: "lines",
          // Re-splits when the viewport or the loaded font changes the line
          // breaks — the classic cause of text stuck mid-animation.
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(mode === "lines" ? self.lines : self.chars, {
              yPercent: 110,
              duration: 0.9,
              ease: "power3.out",
              stagger: mode === "lines" ? 0.09 : 0.02,
              scrollTrigger: trigger,
            }),
        }),
      );
      return;
    }

    const targets =
      el.dataset.revealStagger !== undefined
        ? Array.from(el.children)
        : [el];
    if (el.dataset.revealStagger !== undefined) gsap.set(el, { opacity: 1 });

    gsap.fromTo(
      targets,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.07,
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: trigger,
      },
    );
  });
}

/**
 * ScrollSmoother puts a transform on #smooth-content, which makes it the
 * containing block for any `position: fixed` descendant — so a fixed element
 * authored inside the page would scroll away with the content. Lifting it to
 * <body> restores it to the viewport. The node is disposed of by the router
 * along with the rest of the body on the next navigation.
 */
function unstick(el: Element) {
  document.body.appendChild(el);
}

/** Reading progress line on project pages. */
function progress() {
  const bar = document.querySelector("[data-progress]");
  if (!bar) return;
  unstick(bar);
  gsap.to(bar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
  });
}

/** DE hero: packets travelling the DAG, and nodes breathing out of phase. */
function pipeline() {
  const svg = document.querySelector("[data-pipeline]");
  if (!svg) return;

  svg.querySelectorAll<SVGPathElement>("[data-flow]").forEach((path) => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDashoffset: len });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 3 + Math.random() * 2,
      ease: "none",
      repeat: -1,
      delay: Math.random() * 3,
    });
  });

  gsap.to(svg.querySelectorAll("[data-node]"), {
    opacity: 0.45,
    duration: 2.2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: { each: 0.25, from: "random" },
  });
}

/** Dot that trails the pointer. `data-cursor="label"` swaps its content. */
function cursor() {
  const dot = document.getElementById("cursor");
  if (!dot) return;
  placeCursor(dot);

  const x = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3" });
  const y = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3" });

  listen(window, "pointermove", (e) => {
    x(e.clientX);
    y(e.clientY);
  });

  document.querySelectorAll<HTMLElement>("[data-cursor]").forEach((el) => {
    el.addEventListener("pointerenter", () => {
      dot.textContent = el.dataset.cursor || "";
      dot.dataset.state = el.dataset.cursor ? "label" : "hover";
    });
    el.addEventListener("pointerleave", () => {
      dot.textContent = "";
      delete dot.dataset.state;
    });
  });
}

/** `data-magnetic` — element leans toward the pointer, then springs back. */
function magnets() {
  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = Number(el.dataset.magnetic || 0.35);
    const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

    el.addEventListener("pointermove", (e) => {
      const b = el.getBoundingClientRect();
      x((e.clientX - (b.left + b.width / 2)) * strength);
      y((e.clientY - (b.top + b.height / 2)) * strength);
    });
    el.addEventListener("pointerleave", () => {
      x(0);
      y(0);
    });
  });
}

/* -------------------------------------------------------------------------- */

document.addEventListener("astro:page-load", setup);
document.addEventListener("astro:before-swap", teardown);
// Runs as soon as the new body is in, before page-load — so the cursor is
// already under the pointer while the view transition plays.
document.addEventListener("astro:after-swap", () =>
  placeCursor(document.getElementById("cursor")),
);
