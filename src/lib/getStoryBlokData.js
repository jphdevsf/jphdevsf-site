import { draftMode } from "next/headers"
import { getStoryblokApi } from "@/lib/storyblok"

const getStoryBlokData = async (url, options = {}) => {
  const { isEnabled } = await draftMode()

  const apiOptions = {
    version: isEnabled ? "draft" : "published",
    ...options
  }

  const { data } = await getStoryblokApi().get(url, apiOptions)
  return data
}

export default getStoryBlokData
