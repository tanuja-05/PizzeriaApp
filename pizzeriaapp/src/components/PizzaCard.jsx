import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function PizzaCard({pizzaname,pizzaprice,pizzadescription,pizzaIngredients,pizzaToppings,pizzaimageurl,pizzatype,pizzaid}){
    const isVeg = pizzatype==="veg";
    let navigateTo=useNavigate();
    let goToBuildPizza=()=>{
        navigateTo(`/build-pizza/${pizzaid}`);
    }
    return(
        <>
        <div className="container d-flex justify-content-between shadow m-2 rounded p-2" style={{maxWidth:"580px"}}>
            <div className="p-2">
                <h5>{pizzaname}</h5>
                <p>{pizzadescription}</p>
                <p>Rs. {pizzaprice}</p>
            </div>
            <div className="p-2">
                <div className=" m-3" style={{width:"20px",height:"20px",background:isVeg?"green":"red"}}></div>
                <p className="m-2 fw-bold">₹{pizzaprice}</p>
            </div>
            <div className="p-2">
                <img 
                 src={pizzaimageurl} 
                 className="img-fluid rounded"
                 style={{width:"180px", height:"120px"}} 
                 alt="Pizzaimg" />
                <br />
                <button className="btn btn-warning text-white mt-4 " style={{width:"100px"}} onClick={goToBuildPizza} >Add to Cart</button>
            </div>
        </div>
        
        
        </>
    )
}