import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center flex-none mx-4">
      <Image
        src="/image/jphdevsf-icon-box-cat.svg"
        alt="Logo"
        width={32}
        height={32}
        className="block relative"
      />
      <span className="font-title flex relative mx-2 text-center text-xl md:text-2xl lg:text-3xl text-purple-950 tracking-wide uppercase leading-none font-heading-bold">
        <span className="relative block text-indigo-950">JPH</span>
        <span className="relative block text-figma_red">DEV</span>
        <span className="relative block text-figma_blue">SF</span>
      </span>
    </Link>
  )
}

export default Logo
