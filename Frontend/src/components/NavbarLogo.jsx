import myImg from '../assets/brand-spotify.png'

const NavbarLogo = () => {
  return (
    <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
        <img className='w-12 h-12' src={myImg} alt="" />
    </div>
  )
}

export default NavbarLogo
