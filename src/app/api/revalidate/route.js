import { revalidatePath } from "next/cache"

export async function POST(request) {
  try {
    const { path } = await request.json()

    // // Check for authorization header to confirm this is a valid request
    // const authHeader = request.headers.get("authorization")
    // if (!authHeader || authHeader !== `Bearer ${process.env.REVALIDATE_SECRET_TOKEN}`) {
    //   return Response.json({ message: "Invalid token" }, { status: 401 })
    // }

    // Check if path is provided
    if (!path) {
      return Response.json({ message: "Missing path" }, { status: 400 })
    }

    // Revalidate the specific path using Next.js revalidatePath API
    // Using 'max' profile for stale-while-revalidate behavior
    revalidatePath(path, "max")

    return Response.json({ revalidated: true })
  } catch (err) {
    console.error(err)
    return Response.json({ message: "Error revalidating" }, { status: 500 })
  }
}
