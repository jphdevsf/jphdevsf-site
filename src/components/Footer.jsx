import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex justify-center items-center text-center border-t tracking-wide border-gray-200 bg-white mt-32 p-4 mb-2">
      <p className="text-sm text-gray-800 font-body">
        &copy; All rights reserved © {currentYear}. &nbsp; | &nbsp;
        <Link href="https://github.com/jphdevsf" target="_blank" className="inline underline">
          GitHub
        </Link>
        &nbsp; | &nbsp;
        <Link
          href="https://www.linkedin.com/in/jacob-hernandez-90201b3a/"
          target="_blank"
          className="inline underline"
        >
          LinkedIn
        </Link>
      </p>
    </footer>
  )
}

export default Footer
