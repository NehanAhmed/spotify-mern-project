import myImg from '../assets/brand-spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple,faGoogle  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className='bg-black text-white h-screen py-12 gap-4'>
        <div className='flex flex-col items-center'>
        <div className='w-18 h-18 bg-white rounded-full flex items-center justify-center'>
            <img className='w-16 h-16' src={myImg} alt="" />
        </div>
        <div>
            <h1 className='w-98 text-6xl font-bold text-center'>Sign up to start listening</h1>
        </div>
        </div>
            <form>
                <div className='flex flex-col gap-4 w-100 ml-200 mt-20'>
                    <label className='text-xl font-bold'>Email address</label>
                    <input className='border border-white h-16 rounded-xl px-4' type="email" placeholder='name@domain.com' />
                    
                    <button className='bg-[#1ED760] text-black font-bold rounded-full h-16 cursor-pointer'>Next</button>
                    
                    <p className='text-center text-xl'>or</p>
                    
                    <button className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:text-xl flex items-center justify-center'><FontAwesomeIcon icon={faGoogle} className='text-xl' />Sign up with Google</button>
                    
                    <button className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:text-xl flex items-center justify-center'><FontAwesomeIcon icon={faApple} className='text-2xl' />Sign up with Apple</button>
                </div>
            </form>
            <p className='text-center text-gray-400 mt-14'>Already have an account?</p>
           <Link to='signin'> <p className='text-center text-lg font-bold cursor-pointer w-24 text-white mt-14 ml-240'>Log in</p></Link>
    </div>

)

}

export default Signup
