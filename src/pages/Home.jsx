import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { Menu } from '@mui/icons-material'

export default function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  return (
    <div className="flex flex-col w-full md:flex-row md:min-h-screen">
      {/* Header for small screens */}
      <div className="flex md:hidden">
        <div className="relative flex items-center justify-between w-full px-4 py-4 bg-white shadow-2xl md:px-8">
          {/* Menu Icon */}
          <button className="absolute left-2 flex items-center justify-center p-2 overflow-hidden md:hidden ">
            <Menu onClick={() => setToggleSidebar(true)} />
          </button>
          {/* Logo */}
          <Link
            to="/"
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

      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/*Sidebar for small screens  */}
      {toggleSidebar && <Sidebar setToggleSidebar={setToggleSidebar} />}

      {/* Main content */}

      <main className="w-full px-4 py-6 md:px-8 md:ml-72 bg-contentBgColor">
        <div className="flex flex-wrap items-center justify-center w-full h-full">
          {/* TODO: Wallet connect */}
          Connect wallet
        </div>
      </main>
    </div>
  )
}
