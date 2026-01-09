import { Link } from 'react-router-dom';

import logo from '../assets/Images/logo.jpeg'

export default function Header(){
    return(
        <>
        <nav className="navbar bg-black text-white p-2">
            <div className="col-2 ">
                <Link to="/HomePage" className="nav-link h2 fs-2">Pizzeria</Link>
            </div>
            <div className="d-flex col-10">
                <div className="left col-4 d-flex justify-content-between align-center">
                     <img src={logo} alt="logo" style={{"width":"50px","height":"50px"}} />
                     <Link to="/OrderPizza" className="nav-link fs-5">Order Pizza</Link>
                     <Link to="/BuildPizza" className="nav-link fs-5">Build Ur Pizza</Link>
                </div>
                 <div className="right d-flex justify-content-end col-8">
                      <button className="btn btn-warning text-white">Shopping Cart</button>
                 </div>
            </div>
        </nav>
        
        </>
    );
}