import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Main from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
