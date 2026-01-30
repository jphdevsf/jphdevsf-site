import { draftMode } from "next/headers"
import DraftToolbar from "@/components/PreviewToolbar"
import StoryblokProvider from "@/components/StoryblokProvider"

export default async function PreviewLayout({ children }) {
  const draft = await draftMode()
  draft.enable()
  return (
    <StoryblokProvider>
      <DraftToolbar enabled={true} />
      {children}
    </StoryblokProvider>
  )
}
