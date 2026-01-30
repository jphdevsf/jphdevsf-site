import { getStoryblokApi } from "@/lib/storyblok"

const getStoryBlokData = async (url, options = {}) => {
  const { preview, ...apiOptions } = options
  const version = preview || process.env.NODE_ENV !== "production" ? "draft" : "published"

  const fetchOptions = preview ? { cache: "no-store", next: { revalidate: 0 } } : undefined

  const { data } = await getStoryblokApi().get(
    url,
    {
      version,
      ...apiOptions
    },
    fetchOptions
  )
  return data
}

export default getStoryBlokData
