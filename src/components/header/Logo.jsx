import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center mx-4 p-1 md:p-0">
      <div className="logo-container text-secondary w-7 border-4 border-figma_green aspect-square rounded-full overflow-hidden">
        <Image
          src="/image/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="relative w-full h-full object-cover"
        />
      </div>
      <span className="font-title text-center text-xl md:text-2xl lg:text-3xl text-purple-950 tracking-wide uppercase leading-none font-heading-bold">
        <span className="text-indigo-950">JPH</span>
        <span className="text-figma_red">DEV</span>
        <span className="text-figma_blue">SF</span>
      </span>
    </Link>
  )
}

export default Logo
