import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple,faInstagram,faFacebook  } from '@fortawesome/free-brands-svg-icons'
const FooterMenus = () => {
  return (
    <div className='w-440 h-fit flex justify-between border-t border-gray-700 pt-20'>
              <div className='flex flex-col gap-2 text-left'>
                  <h3 className='font-bold text-2xl text-white'>Company</h3>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>About</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Jobs</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>For the Record</p>
              </div>
              <div className='flex flex-col gap-2 text-left'>
                  <h3 className='font-bold text-2xl text-white'>Communities</h3>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>For Artists</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Developers</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Advertising</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Investors</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Vendors</p>
              </div>
              <div className='flex flex-col gap-2 text-left'>
                  <h3 className='font-bold text-2xl text-white'>Useful links</h3>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Support</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Free Mobile App</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Popular by Country</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Import your music</p>
              </div>
              <div className='flex flex-col gap-2 text-left'>
                  <h3 className='font-bold text-2xl text-white'>Spotify Plans</h3>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Premium Individual</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Premium Duo</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Premium Family</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Premium Student</p>
                  <p className='text-lg text-gray-400 cursor-pointer hover:text-white font-semibold'>Spotify Free</p>
              </div>
              <div className='flex items-center justify-between w-50 h-20'>
                  <p className='w-14 h-14 px-4 bg-gray-700 text-center flex items-center rounded-full cursor-pointer hover:bg-gray-500'><FontAwesomeIcon icon={faInstagram} className='text-white text-2xl' /></p>
                  <p className='w-14 h-14 px-4 bg-gray-700 text-center flex items-center rounded-full cursor-pointer hover:bg-gray-500'><FontAwesomeIcon icon={faApple} className='text-white text-2xl' /></p>
                  <p className='w-14 h-14 px-4 bg-gray-700 text-center flex items-center rounded-full cursor-pointer hover:bg-gray-500'><FontAwesomeIcon icon={faFacebook} className='text-white text-2xl' /></p>
              </div>
              
            </div>
  )
}

export default FooterMenus
