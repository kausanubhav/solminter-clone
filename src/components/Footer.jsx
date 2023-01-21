export default function Footer() {
  return (
    <div className="text-center">
      <p className="mb-3 text-tiny">Connect with us</p>
      <div className="flex justify-center mb-5">
        <img
          src="https://solminter.com/static/media/twitter.3caba749.svg"
          alt="twitter logo"
          className="p-3 mr-3 rounded-full cursor-pointer bg-iconColor"
        />
        <img
          src="https://solminter.com/static/media/telegram.5328486d.svg"
          alt="telegram logo"
          className="p-3 mr-3 rounded-full cursor-pointer bg-iconColor"
        />
      </div>
      <div className="flex items-center justify-between p-3 border-t border-gray-100 text-tiny">
        <img src="https://solminter.com/static/media/builtOn.1297d358.svg" alt="" />
        <p> &copy; Solminter 2021</p>
      </div>
    </div>
  )
}
