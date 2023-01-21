import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const isNotActiveStyle =
    'flex items-center py-2 mt-2 px-4 font-medium text-gray-500 bg-transparent rounded-lg hover:bg-btnHoverColor hover:border-white transition-all duration-150 ease-in-out '
  const isActiveStyle =
    'flex items-center py-2 px-4 mt-2 font-medium border-white bg-btnHoverColor rounded-lg transition-all duration-150 ease-in-out'

  return (
    <div className="flex-grow px-5 mt-4 pb-4 md:block md:pb-0">
      <div className="pt-4 pb-4 border-gray-100">
        {/* Link 1 */}
        <NavLink
          to="/token-management"
          className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
        >
          <img
            className="mr-3"
            src="https://solminter.com/static/media/icon_manage.61fedfe2.svg"
            alt="icon"
          />
          <span className="text-sm">Token Management</span>
        </NavLink>
        {/* Link2 */}
        <NavLink
          to="/apply-for-ido"
          className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
        >
          <img
            className="mr-3"
            src="https://solminter.com/static/media/icon_apply_ido.06ebbe72.svg"
            alt="icon"
          />
          <span className="text-sm">Apply for IDO</span>
        </NavLink>
        {/* Link 3  */}
        <NavLink
          to="/art"
          className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
        >
          <img
            className="mr-3"
            src="https://solminter.com/static/media/icon_nft.d8e9f1af.svg"
            alt="icon"
          />
          <span className="text-sm">NFT</span>
        </NavLink>
        {/* Link 4 */}
        <NavLink
          to="/docs"
          className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
        >
          <img
            className="mr-3"
            src="https://solminter.com/static/media/documentation_1.7ec4e17e.svg"
            alt="icon"
          />
          <span className="text-sm">Documentation</span>
        </NavLink>
      </div>
    </div>
  )
}
