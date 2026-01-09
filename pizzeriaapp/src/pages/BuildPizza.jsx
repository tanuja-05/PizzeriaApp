import axios from "axios";
import { useEffect,useState } from "react";
import Header from "../components/Hearder";
import Footer from "../components/Footer";
export default function BuildPizza(){
     const[ingredientData,SetIngredientData]=useState([]);
     const[totalCost,setTotalCost]=useState(0);
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
    },[])
    let calculateTotalCost=(price,checked)=>{
        if(checked){
            setTotalCost(totalCost+price);
        }
        else{
            setTotalCost(totalCost-price);
        }
    }
    return(
       <>
       <Header/>
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
                        <input type="checkbox" name="Add" 
                        onChange={(e)=>calculateTotalCost(item.price,e.target.checked)}
                        id=""/> Add
                        </td>
                     </tr>
                 </tbody>
                </>
            )
        })
       }
       <td className="fw-bold">Total Cost: {totalCost}</td>
       <td><button className="btn text-warning btn-dark mt-2">Build Ur Pizza</button></td>
       </table> 
       </div>
      <Footer/>
       </>
    );
}