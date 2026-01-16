const FileDownload = ({ blok }) => {
  const url = blok.file?.filename
  const label = blok.title || "Download"

  if (!url) return null

  return (
    <a
      href={url}
      download
      className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
    >
      {label}
    </a>
  )
}

export default FileDownload
