import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Artist from './pages/Artist'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/artist' element={<Artist />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
