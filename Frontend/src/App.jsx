import Navbar from './components/Navbar'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
