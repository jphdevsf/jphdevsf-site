import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

// import getStoryBlokData from "@/lib/getStoryBlokData"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  //   const secret = searchParams.get("secret")
  const slug = searchParams.get("slug") || ""
  //   // Check the secret and next parameters
  //   // This secret should only be known to this Route Handler and the CMS
  //   if (secret !== 'MY_SECRET_TOKEN' || !slug) {
  //     return new Response('Invalid token', { status: 401 })
  //   }

  //   const post = await getPostBySlug(slug)
  //   const storyblokData = await getStoryBlokData(`cdn/stories/${fullSlug}`)
  //   if (!storyblokData) return new Response("Invalid slug", { status: 401 })
  const draft = await draftMode()
  draft.enable()
  redirect(`/${slug}`)
}
