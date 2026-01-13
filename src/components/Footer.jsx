import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex justify-center items-center text-center border-t tracking-wide border-gray-200 bg-indigo-950 mt-32 p-4 mb-2">
      <p className="text-sm text-white font-body">
        <span className="block md:inline">
          &copy; {currentYear} Jacob Hernandez — Made with ❤️ in the Bay Area.
        </span>
        <span className="hidden md:inline">&nbsp; | &nbsp;</span>
        <Link
          href="https://github.com/jphdevsf"
          target="_blank"
          className="inline underline hover:text-figma_red"
        >
          GitHub
        </Link>
        &nbsp; | &nbsp;
        <Link
          href="https://www.linkedin.com/in/jacob-hernandez-90201b3a/"
          target="_blank"
          className="inline underline hover:text-figma_red"
        >
          LinkedIn
        </Link>
      </p>
    </footer>
  )
}

export default Footer
