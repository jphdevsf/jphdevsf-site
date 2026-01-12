const Header = ({ children }) => {
  return (
    <header className="font-body flex justify-between items-stretch border-b border-gray-800 p-0">
      {children}
    </header>
  )
}

export default Header
