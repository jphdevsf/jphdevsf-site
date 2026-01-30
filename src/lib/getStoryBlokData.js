import { getStoryblokApi } from "@/lib/storyblok"

const getStoryBlokData = async (url, options = {}) => {
  const apiOptions = {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
    ...options
  }
  const { data } = await getStoryblokApi().get(url, apiOptions)
  return data
}

export default getStoryBlokData
