import myImg from '../assets/brand-spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Signup = () => {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [passwd, setpasswd] = useState('')
    const [loading, setloading] = useState(false)
    const [success, setsuccess] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setloading(true)
        // console.log(username, email, passwd)
        if (!username || !email || !passwd) {
            console.log("Please fill all fields")
            return
        }

        const userData = {
            userName: username,
            email: email,
            password: passwd
        }

        const result = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if (result.status !== 201) {
            console.log("Signup failed")
            return
        }

        const data = await result.json()

        console.log(data)

        setemail("")
        setusername("")
        setpasswd("")
        setsuccess(true)
        setloading(false)
        navigate("/signin")
    }

    return (
        <div className='bg-black text-white min-h-screen py-12 gap-4'>
            <div className='flex flex-col items-center'>
                <div className='w-18 h-18 bg-white rounded-full flex items-center justify-center'>
                    <img className='w-16 h-16' src={myImg} alt="" />
                </div>
                <div>
                    <h1 className='w-98 text-6xl font-bold text-center'>Sign up to start listening</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4 w-100 ml-200 mt-20'>
                    <label htmlFor="username" className='text-xl font-bold'>Username</label>
                    <input className='border border-white h-16 rounded-xl px-4' type="text" placeholder='Create a username' value={username} onChange={(e) => setusername(e.target.value)} disabled={loading} />
                    <label className='text-xl font-bold'>Email address</label>
                    <input className='border border-white h-16 rounded-xl px-4' type="email" placeholder='name@domain.com' value={email} onChange={(e) => setemail(e.target.value)} disabled={loading} />

                    <label htmlFor="password" className='text-xl font-bold'>Password</label>
                    <input className='border border-white h-16 rounded-xl px-4' type="password" placeholder='Create a password' value={passwd} onChange={(e) => setpasswd(e.target.value)} disabled={loading} />
                    <button className='bg-[#1ED760] text-black font-bold rounded-full h-16 cursor-pointer' disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</button>

                    <p className='text-center text-xl'>or</p>

                    <button className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:text-xl flex items-center justify-center'><FontAwesomeIcon icon={faGoogle} className='text-xl' />Sign up with Google</button>

                    <button className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:text-xl flex items-center justify-center'><FontAwesomeIcon icon={faApple} className='text-2xl' />Sign up with Apple</button>
                </div>
            </form>
            <p className='text-center text-gray-400 mt-14'>Already have an account?</p>
            <Link to='/signin'> <p className='text-center text-lg font-bold cursor-pointer w-24 text-white mt-14 ml-240'>Log in</p></Link>
        </div>

    )

}

export default Signup
