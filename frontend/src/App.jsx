import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'
import ProductDetailPage from "./pages/ProductDetails";
<<<<<<< HEAD
import AddProduct from './pages/AddProduct'
import CartPage from './pages/CartPage'
=======
import MyListingsPage from './pages/MyListings'
>>>>>>> abf82db6b1e18f2227c7ba25f0e986f8d80268ed

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
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/cartPage' element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App
