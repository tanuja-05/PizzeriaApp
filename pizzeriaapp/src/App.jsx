import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home';
import OrderPizza from './pages/OrderPizza';
import BuildPizza from './pages/BuildPizza';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/HomePage' element={<HomePage/>}></Route>
          <Route path='/OrderPizza' element={<OrderPizza/>}></Route>
          <Route path='/BuildPizza' element={<BuildPizza/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
