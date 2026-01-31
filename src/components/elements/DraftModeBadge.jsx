"use client"

const DraftModeBadge = () => {
  const exitDraft = () => {
    window.location.href = "/api/draft-disable"
  }

  return (
    <button
      type="button"
      onClick={exitDraft}
      className="absolute top-0 md:top-14 right-0 bg-figma_pink p-2 text-sm z-10"
    >
      DRAFT MODE <span className="hover:cursor-pointer underline">Click to Exit</span>
    </button>
  )
}

export default DraftModeBadge
