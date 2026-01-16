const Header = ({ children }) => {
  return (
    <header className="font-body flex flex-col md:flex-row items-center justify-between md:items-stretch border-b border-gray-800 p-0">
      {children}
    </header>
  )
}

export default Header
