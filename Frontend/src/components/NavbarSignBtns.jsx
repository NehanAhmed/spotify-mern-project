import { Link } from 'react-router-dom'

const NavbarSignBtns = () => {
  return (
    <div className="flex justify-between w-full">
       <Link to='/signup'><button className='bg-white text-gray-700 font-bold text-xl w-28 h-12 cursor-pointer rounded-full'>Sign up</button></Link>
        <Link to='/signin'><button className='bg-white text-black font-bold text-xl w-28 h-12 cursor-pointer rounded-full'>Log in</button></Link> 
    </div>
  )
}

export default NavbarSignBtns
