import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'



function App() {
  return (
    <div className='w-full h-screen flex '>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails/>} />
        </Routes>
    </div>
  )
}

export default App