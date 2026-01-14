import { sbImg } from "@/lib/storyblokImageUrl"

export default function SBPicture({
  src,
  alt = "",
  mobileRatio = "1:1",
  desktopRatio = "16:9",
  quality = 70,
  className = "",
  sizes = "100vw",
  loading = "lazy"
}) {
  const [mw, mh] = mobileRatio.split(":").map(Number)
  const [dw, dh] = desktopRatio.split(":").map(Number)

  // Generate widths every ~100px
  const mobileWidths = [300, 400, 500, 600, 700, 800, 900]
  const desktopWidths = [800, 900, 1000, 1100, 1200, 1400, 1600, 1800, 2000]

  const mobileSrcSet = mobileWidths
    .map(w => `${sbImg(src, w, Math.round((w * mh) / mw), quality)} ${w}w`)
    .join(", ")

  const desktopSrcSet = desktopWidths
    .map(w => `${sbImg(src, w, Math.round((w * dh) / dw), quality)} ${w}w`)
    .join(", ")

  return (
    <picture className={className}>
      {/* Mobile WebP */}
      <source type="image/webp" media="(max-width: 767px)" srcSet={mobileSrcSet} sizes={sizes} />

      {/* Desktop WebP */}
      <source type="image/webp" media="(min-width: 768px)" srcSet={desktopSrcSet} sizes={sizes} />

      {/* Mobile JPG fallback */}
      <source type="image/jpeg" media="(max-width: 767px)" srcSet={mobileSrcSet} sizes={sizes} />

      {/* Desktop JPG fallback */}
      <source type="image/jpeg" media="(min-width: 768px)" srcSet={desktopSrcSet} sizes={sizes} />

      {/* Final fallback <img> */}
      <img
        src={sbImg(src, 1200, Math.round((1200 * dh) / dw), quality)}
        alt={alt}
        loading={loading}
        width="1200"
        height={Math.round((1200 * dh) / dw)}
        className="object-cover w-full h-full"
      />
    </picture>
  )
}
