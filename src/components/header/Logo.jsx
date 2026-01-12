import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex items-center p-2">
      <div className="logo-container text-secondary w-8 border-2 border-figma_green aspect-square rounded-full overflow-hidden">
        <Image
          src="/image/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="relative w-full h-full object-cover"
        />
      </div>
      <span className="font-title text-center text-xl md:text-2xl lg:text-3xl text-purple-950 tracking-wide uppercase leading-none font-heading-bold mx-2">
        <span className="text-figma_purple">JPH</span>
        <span className="text-figma_red">DEV</span>
        <span className="text-figma_blue">SF</span>
      </span>
    </div>
  )
}

export default Logo
