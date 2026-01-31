import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request) {
  const draft = await draftMode()
  draft.disable()
  const referer = request.headers.get("referer") || "/"
  return redirect(referer)
}
