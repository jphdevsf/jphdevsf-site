import { revalidateTag } from "next/cache"

export async function POST(request) {
  try {
    // Parse Storyblok webhook payload
    const payload = await request.json()

    // Revalidate the space tag, which triggers cache refresh
    // Using "max" profile for stale-while-revalidate behavior
    revalidateTag("storyblok-space", "max")

    // Log webhook event for debugging
    console.log("Storyblok webhook received:", {
      action: payload.action,
      story_id: payload.story_id,
      text: payload.text,
      space_id: payload.space_id
    })

    // Storyblok requires 2xx response and content-type: application/json
    return Response.json(
      {
        revalidated: true,
        action: payload.action,
        story_id: payload.story_id
      },
      {
        headers: {
          "content-type": "application/json"
        }
      }
    )
  } catch (err) {
    console.error("Webhook processing error:", err)
    return Response.json({ message: "Error processing webhook" }, { status: 500 })
  }
}
