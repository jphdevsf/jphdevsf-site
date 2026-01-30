import { getStoryblokApi } from "@/lib/storyblok"

const getStoryBlokData = async (url, options = {}) => {
  const apiOptions = {
    // version: process.env.NODE_ENV === "production" ? "published" : "draft",
    version: "production",
    ...options
  }
  const { data } = await getStoryblokApi().get(url, apiOptions)

  // const x = await getStoryblokApi()
  // console.log("JPH x was", x)
  // const { data } = x.get(url, apiOptions)
  return data
}

export default getStoryBlokData
