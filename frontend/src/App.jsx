import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'
import ProductDetailPage from "./pages/ProductDetails";
import AddProduct from './pages/AddProduct'
import CartPage from './pages/CartPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/cartPage' element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App
