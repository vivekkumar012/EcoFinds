import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'
import ProductDetailPage from "./pages/ProductDetails";
import MyListingsPage from './pages/MyListings'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path="/listings" element={<MyListingsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
