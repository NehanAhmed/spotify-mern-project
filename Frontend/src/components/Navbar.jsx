import NavbarHome from './NavbarHome';
import NavbarLogo from './NavbarLogo';
import NavbarSearch from './NavbarSearch';
import NavbarSignBtns from './NavbarSignBtns';
const Navbar = () => {
  return (
    <nav className= 'bg-black text-white py-2 px-4 flex justify-between items-center w-full h-24'>
        
        <div className='flex items-center justify-between w-140 '>
            <NavbarLogo />
            <NavbarHome />
            <NavbarSearch />
            
        </div>
        <div className=' flex items-center justify-between w-64 '>
            <NavbarSignBtns />
        </div>
    </nav>
  )
}

export default Navbar
