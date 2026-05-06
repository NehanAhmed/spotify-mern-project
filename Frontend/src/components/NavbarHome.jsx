import { House } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavbarHome = () => {
  return (
    <div className='w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer'>
        <Link to='/'><House /></Link>
    </div>
  )
}

export default NavbarHome
