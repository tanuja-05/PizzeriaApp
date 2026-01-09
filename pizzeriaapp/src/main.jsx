import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Hearder.jsx';
import HomePage from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import OrderPizza from './pages/OrderPizza.jsx';
import PizzaCard from './components/PizzaCard.jsx';
import BuildPizza from './pages/BuildPizza.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
