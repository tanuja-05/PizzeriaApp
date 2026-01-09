import axios from "axios";
export default function PizzaCard({pizzaname,pizzaprice,pizzadescription,pizzaIngredients,pizzaToppings,pizzaimageurl,pizzatype,pizzaid}){
    const isVeg = pizzatype==="veg";
    
    let addtoCart=async()=>{
        const item={
            itemType:pizzatype,
            pizzaId:pizzaid,
            name:pizzaname,
            image:pizzaimageurl,
            price:pizzaprice,
        };
        await axios.post('http://localhost:3004/api/cart/insert',item).then((res)=>{
            console.log("Details inserted succesfully",res);
            
        })
    }
    return(
        <>
        <div className="container d-flex justify-content-between shadow m-2 rounded p-2" style={{"max-width":"580px"}}>
            <div className="p-2">
                <h4>{pizzaname}</h4>
                <div className=" m-3" style={{"width":"20px","height":"20px","background":isVeg?"green":"red"}}></div>
                <p className="m-2">₹{pizzaprice}</p>
            </div>
            <div className="p-2">
                <p>{pizzadescription}</p>
                <p><h5>Ingredients</h5>{pizzaIngredients.join(", ")}</p>
                <p><h5>Toppings</h5>{pizzaToppings.join(", ")}</p>
            </div>
            <div className="p-2">
                <img 
                 src={pizzaimageurl} 
                 className="img-fluid rounded"
                 style={{"width":"180px", "height":"120px"}} 
                 alt="Pizzaimg" />
                <br />
                <button className="btn btn-warning text-white mt-4 " onClick={addtoCart} >Add to Cart</button>
            </div>
        </div>
        
        
        </>
    )
}