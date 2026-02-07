// import { draftMode } from "next/headers"

import { isVisualEditor } from "@storyblok/react"
import { getStoryblokApi } from "@/lib/storyblok"

const getStoryBlokData = async (url, options = {}) => {
  // const { isEnabled } = await draftMode()
  const isInEditor = isVisualEditor()
  const apiOptions = {
    version: isInEditor ? "draft" : "published",
    ...options
  }

  const { data } = await getStoryblokApi().get(url, apiOptions)
  return data
}

export default getStoryBlokData
