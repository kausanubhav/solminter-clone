import { Close } from '@mui/icons-material'
import { Link } from 'react-router-dom'
export default function Header({ setToggleSidebar }) {
  const handleClose = () => {
    if (setToggleSidebar) {
      setToggleSidebar(false)
    }
  }
  return (
    <div className="flex">
      <div className="relative flex items-center justify-between w-full px-4 py-4 bg-white shadow-2xl md:px-8">
        {/* Close Icon */}
        <button className="absolute left-2 flex items-center justify-center p-2 overflow-hidden md:hidden ">
          <Close onClick={handleClose} />
        </button>
        {/* Logo */}
        <Link
          to="#/"
          className="text-lg uppercase rounded-lg ml-auto focus:outline-none focus:shadow-outline md:m-auto"
        >
          <img
            src="https://solminter.com/static/media/logo.d6c0c14e.svg"
            alt="logo"
            className="w-28"
          />
        </Link>
      </div>
    </div>
  )
}
