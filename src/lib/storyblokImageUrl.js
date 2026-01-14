export function sbImg(src, width, height, quality = 75) {
  return `${src}/m/${width}x${height}/smart/filters:quality(${quality})`
}
