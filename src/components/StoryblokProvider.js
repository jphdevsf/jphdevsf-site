"use client"

import { useEffect, useState } from "react"
import { disablePreviewAction } from "@/app/actions/disablePreview"
import { getStoryblokApi } from "@/lib/storyblok"
import { initStoryblokClient } from "@/lib/storyblok-client"

export default function StoryblokProvider({ children }) {
  const [isVisualEditor, setIsVisualEditor] = useState(false)

  useEffect(() => {
    if (window.self !== window.top && window.location.search.includes("_storyblok")) {
      setIsVisualEditor(true)
    } else {
      disablePreviewAction()
    }
  }, [])

  if (isVisualEditor) initStoryblokClient()
  getStoryblokApi()
  return children
}
