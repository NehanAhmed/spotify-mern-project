import myImg from '../assets/brand-spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signin = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const isEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (!identifier || !password) {
            setError('Please fill all fields')
            setLoading(false)
            return
        }

        const isEmailValue = isEmail(identifier)

        const loginData = isEmailValue
            ? { email: identifier, password }
            : { userName: identifier, password }

        try {
            const result = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(loginData)
            })

            const data = await result.json()

            if (!result.ok) {
                setError(data.message || 'Login failed')
                setLoading(false)
                return
            }

            setIdentifier('')
            setPassword('')
            setLoading(false)
            navigate('/')
        } catch (err) {
            setError('Something went wrong. Please try again.')
            setLoading(false)
        }
    }

    return (
        <div className='bg-black text-white min-h-screen py-12 gap-4'>
            <div className='flex flex-col items-center'>
                <div className='w-18 h-18 bg-white rounded-full flex items-center justify-center'>
                    <img className='w-16 h-16' src={myImg} alt="" />
                </div>
                <div>
                    <h1 className='w-98 text-6xl font-bold text-center'>Welcome back</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4 w-100 ml-200 mt-20'>
                    {error && (
                        <div className='bg-red-500 text-white p-3 rounded-xl text-center'>
                            {error}
                        </div>
                    )}
                    <label className='text-xl font-bold'>Email or username</label>
                    <input
                        className='border border-white h-16 rounded-xl px-4 text-white bg-black'
                        type="text"
                        placeholder='Email or username'
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        disabled={loading}
                    />

                    <label className='text-xl font-bold'>Password</label>
                    <input
                        className='border border-white h-16 rounded-xl px-4 text-white bg-black'
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />

                    <button
                        className='bg-[#1ED760] text-black font-semibold rounded-full h-16 cursor-pointer'
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>

                    <p className='text-center text-xl'>or</p>

                    <button type="button" className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:text-xl flex items-center justify-center'>
                        <FontAwesomeIcon icon={faGoogle} className='text-xl' />
                        Continue with Google
                    </button>

                    <button type="button" className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:text-xl flex items-center justify-center'>
                        <FontAwesomeIcon icon={faApple} className='text-2xl' />
                        Continue with Apple
                    </button>

                    <button type="button" className='bg-transparent border border-white text-lg text-white font-bold rounded-full h-16 cursor-pointer hover:text-xl flex items-center justify-center'>
                        <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
                        Continue with Facebook
                    </button>
                </div>
            </form>
            <p className='text-center text-gray-400 mt-14'>Don't have an account?</p>
            <Link to='/signup'>
                <p className='text-center text-lg font-bold cursor-pointer w-24 text-white mt-2 ml-238'>Sign up</p>
            </Link>
        </div>
    )
}

export default Signin
