"use server"

import { revalidatePath } from "next/cache"
import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export async function disablePreviewAction() {
  const draft = await draftMode()
  draft.disable()
  revalidatePath("/")
  redirect("/")
}
