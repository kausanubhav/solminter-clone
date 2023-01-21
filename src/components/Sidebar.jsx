import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import WalletModal from './WalletModal'
import { useState } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

/* Sidebar component works for both sm and md screen */
/* We just have to pass an extra prop for the header part */
export default function Sidebar({ setToggleSidebar }) {
  const [showWalletModal, setShowWalletModal] = useState(false)
  return (
    <div className="fixed flex flex-col flex-shrink-0 w-full h-full text-gray-700 bg-white md:left-0 md:inset-y-0 md:w-72">
      <Header setToggleSidebar={setToggleSidebar && setToggleSidebar} />
      {/* Connect wallet button */}
      <WalletMultiButton>
        <div className="px-5 mt-3 text-center">
          <button
            className="w-full px-3 py-2 m-auto overflow-hidden text-sm font-bold tracking-wide text-white uppsercase border-4 rounded-full bg-connectBtnBgColor border-connectBtnBorderColor min-h-max"
            //onClick={() => setShowWalletModal(true)}
          >
            Connect Wallet
          </button>

          {/* Modal */}
          <WalletModal showWalletModal={showWalletModal} setShowWalletModal={setShowWalletModal} />
        </div>
      </WalletMultiButton>

      <Navbar />
      <Footer />
    </div>
  )
}
