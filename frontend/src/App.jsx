import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App
