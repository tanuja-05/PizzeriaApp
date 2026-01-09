import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home';
import OrderPizza from './pages/OrderPizza';
import BuildPizza from './pages/BuildPizza';
import Cart from './pages/ShoppingCard';
function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/HomePage' element={<HomePage/>}></Route>
          <Route path='/OrderPizza' element={<OrderPizza/>}></Route>
          <Route path='/BuildPizza' element={<BuildPizza/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
