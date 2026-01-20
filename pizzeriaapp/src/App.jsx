import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home';
import OrderPizza from './pages/OrderPizza';
import BuildPizza from './pages/BuildPizza';
import Cart from './pages/ShoppingCard';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/order-pizza' element={<OrderPizza/>}></Route>
          <Route path='/build-pizza' element={<OrderPizza/>}></Route>
          <Route path='/build-pizza/:pizzaid' element={<BuildPizza/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
