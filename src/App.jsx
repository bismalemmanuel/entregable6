import { useEffect, useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
import ProductInfo from './pages/ProductInfo'
import axios from 'axios'
import Login from './pages/Login'
import { getUserCart } from './store/slices/cart.slice'
import Header from './components/home/shared/Header'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './components/home/shared/ProtectedRoutes'
import Footer from './components/home/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())

  }, [])




  return (
    <div className="App">
      <Header />
      <div className='home__all'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductInfo />} />

          {/* Rutas protegidas  */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<Cart />} />
            <Route path='/purchases' element={<Purchases />} />
          </Route>
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
