import axios from "axios";
import { useEffect,useState } from "react";
import Header from "../components/Hearder";
import Footer from "../components/Footer";
import {useParams, useNavigate} from 'react-router-dom';

export default function BuildPizza(){

     let navigateTo = useNavigate();
     const[ingredientData,SetIngredientData]=useState([]);
     const[totalCost,setTotalCost]=useState(0);

     let pizzaId=useParams().pizzaid;

     const[singlePizzadata,setSinglePizzadata]=useState({
        name:"",
        image:"",
        price:"",
        type:"",
        customIngredients:[]
     })

    let getPizzaData=()=>{
        axios.get(`http://localhost:3009/api/pizza/view/${pizzaId}`).then((res)=>{
            return res.data;    
        }).then((data)=>{
            if(data.status){
                setSinglePizzadata(prev=>({
                    ...data.getRes,
                    customIngredients:prev.customIngredients || []
                }));
                setTotalCost(data.getRes.price)
            }
        })

    }

    let getAllIngredients=()=>{
        axios.get(`http://localhost:3003/api/ingredients/view`).then((res)=>{
            return res.data;
        }).then((data)=>{
            if(data.status){
               SetIngredientData(data.getIngredients)
            }
        })
    }
    useEffect(()=>{
        getAllIngredients();
        getPizzaData();
    },[])

    let handleIngredientChange=(ingredients,isChecked)=>{
       setSinglePizzadata(prev=>({
        ...prev,
        customIngredients:isChecked?[...prev.customIngredients,ingredients.tname]:prev.customIngredients.filter(item=>item!==ingredients.tname)
       }))
    
     setTotalCost(prev=>
        isChecked?prev + ingredients.price:prev-ingredients.price
     )
    
    }

     let addToCart=async()=>{
       let item={
            pizzaId:pizzaId,
            itemType:singlePizzadata.type,
            name:singlePizzadata.name,
            image:singlePizzadata.image,
            price:totalCost,
            customIngredients:singlePizzadata.customIngredients
        };
        await axios.post('http://localhost:3004/api/cart/insert',item).then(()=>{
            alert("Pizza Added to Cart");
        })
        navigateTo('/Cart')
    }
    
    return(
       <>
       <Header/>
      <div className="col-md-8 align-self-center mx-auto">
          <p className="text-center mt-3 mb-6">Pizzeria now gives you the option to build your own pizza. Customize your pizza by choosing the list of ingredients below.</p>
        <div className="p-z pt-1">
       <table className="table table-bordered text-center align-middle ">
       {
        ingredientData.map((item,index)=>{
            return(
                <>
                   <tbody>
                     <tr>
                        <td><img src={item.image} style={{"width":"100px","height":"100px"}} alt="" /></td>
                        <td className="fw-bold">{item.tname} &nbsp; ₹{item.price}</td>
                        <td className='text-warning'>
                        <input 
                        type="checkbox"
                         name="Add" 
                         value={singlePizzadata.Add}
                        onChange={(e)=>handleIngredientChange(item,e.target.checked)}
                        id=""/> Add
                        </td>
                     </tr>
                 </tbody>
                </>
            )
        })
       }
       <td className="fw-bold">Total Cost: {totalCost}</td>
       <td><button className="btn text-warning btn-dark mt-2" onClick={addToCart}>Go to Cart</button></td>
       </table> 
       </div>
      </div>
      <Footer/>
       </>
    );
}