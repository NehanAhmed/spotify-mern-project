import myImg from '../assets/brand-spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple,faGoogle,faFacebook  } from '@fortawesome/free-brands-svg-icons'

const Signin = () => {
  return (
    <div className='bg-black text-white h-screen py-12 gap-4'>
        <div className='flex flex-col items-center'>
        <div className='w-18 h-18 bg-white rounded-full flex items-center justify-center'>
            <img className='w-16 h-16' src={myImg} alt="" />
        </div>
        <div>
            <h1 className='w-98 text-6xl font-bold text-center'>Welcome back</h1>
        </div>
        </div>
            <form>
                <div className='flex flex-col gap-4 w-100 ml-200 mt-20'>
                    <label className='text-xl font-bold'>Email</label>
                    <input className='border border-white h-16 rounded-xl px-4' type="email" />
                    
                    <button className='bg-[#1ED760] text-black font-semibold rounded-full h-16 cursor-pointer'>Continue</button>
                    
                    <p className='text-center text-xl'>or</p>
                    
                    <button className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:bg-[#1ED760] hover:border-0 flex items-center justify-center gap-8'><FontAwesomeIcon icon={faGoogle} className='text-xl' />Continue with Google</button>
                    
                    <button className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:bg-[#1ED760] hover:border-0 flex items-center justify-center'><FontAwesomeIcon icon={faApple} className='text-2xl' />Continue with Apple</button>

                    <button className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:bg-[#1ED760] hover:border-0 flex items-center justify-center'><FontAwesomeIcon icon={faFacebook} className='text-2xl' />Continue with Facebook</button>
                </div>
            </form>
            <p className='text-center text-gray-400 mt-14'>Don't have an account?</p>
            <p className='text-center text-lg font-bold cursor-pointer w-24 text-white mt-14 ml-240'>Sign up</p>
    </div>
  )
}

export default Signin
