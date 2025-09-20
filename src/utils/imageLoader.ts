const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

export const getOptimizedImage = (
  imageName: string
): ImageMetadata | string => {
  if (!imageName) return "";

  if (imageName.startsWith("/") || imageName.startsWith("http")) {
    return imageName;
  }

  const image = images[imageName];

  if (!image) {
    if (import.meta.env.DEV) {
      console.warn(
        `[ImageLoader] Gambar "${imageName}" tidak ditemukan di src/assets/images/`
      );
    }
    return "";
  }

  return image;
};
