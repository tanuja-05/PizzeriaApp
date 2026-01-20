import { isLoggedIn } from "../utils/auth";
import axios from "axios";
import { useEffect,useState } from "react";
import Header from "../components/Hearder";
import Footer from "../components/Footer";
import {useParams, useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";

export default function BuildPizza() {
  let navigateTo = useNavigate();

  const [ingredientData, SetIngredientData] = useState([]);

  const[singlePizzaData,setsinglePizzaData] = useState({
    name:"",
    image:"",
    price:"",
    type:"",
    customIngredients:[]
  })
  console.log(singlePizzaData.customIngredients);
  
  const [totalCost, setTotalCost] = useState(0);
  let pizzaId = useParams().pizzaid;

  let getPizzaData = ()=>{
    axios.get(`http://localhost:3009/api/pizza/view/${pizzaId}`).then((res)=>{
      return res.data;
    }).then((data)=>{
      if(data.status){
        setsinglePizzaData(
          prev=>({
            ...data.getRes,
            customIngredients:prev.customIngredients || []
          })
        );
        setTotalCost(data.getRes.price);
      }
    }).catch((err)=>console.log(err));
  }

  let getAllIngredients = () => {
    axios
      .get(`http://localhost:3003/api/ingredients/view`)
      .then((res) => res.data)
      .then((data) => {
        if (data.status) {
          // API returns list in `getIngredients`
          SetIngredientData(data.getIngredients);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllIngredients();
    getPizzaData();
  }, [pizzaId]);

  let handleIngredientChange=(ingredient,isChecked)=>{
    setsinglePizzaData(prev=>({
      ...prev,
      customIngredients:isChecked
      ? [...prev.customIngredients,ingredient.tname]
      : prev.customIngredients.filter(
        item=>item!==ingredient.tname
      )
    }
    ))

    setTotalCost(prev=>
      isChecked? prev + ingredient.price : prev-ingredient.price
    );
  }

  let addToCart = async()=>{
    if (!isLoggedIn()) {
      navigateTo("/login");
      return;
    }
    const item={
      pizzaId: pizzaId,
      itemType:singlePizzaData.type,
      name: singlePizzaData.name,
      image: singlePizzaData.image,
      price: totalCost,
      customIngredients: singlePizzaData.customIngredients
    };
    await axios.post(`http://localhost:3004/api/cart/insert`,item).then(()=>{
      toast.success("Pizza is added to cart",{
        position:"top-right"
      });
    }).catch((err)=>console.log(err));
    navigateTo('/cart');
  }

  return (
    <>
      <Header />
      <div className="col-md-6 align-self-center mx-auto">
        <p className="text-center p-2">
          Pizzeria now gives you the option to build your own pizza. Customize
          your pizza by choosing the list of ingredients below.
        </p>
        <div className="p-5 pt-2 pb-2">
          <table className="table table-bordered text-center align-middle">
            <tbody className="table-striped">
              {ingredientData.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={item.image}
                        style={{ width: "60px", height: "60px" }}
                        alt=""
                      />
                    </td>
                    <td className="fw-bold">
                      {item.tname} &nbsp; ₹{item.price}
                    </td>
                    <td className="text-warning">
                      <input
                        type="checkbox"
                        name="Add"
                        onChange={(e) =>
                          handleIngredientChange(item, e.target.checked)
                        }
                      />
                      &nbsp;Add
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="fw-bold">Total cost: ₹{totalCost} </td>
                <td>
                  <button className="btn btn-dark text-white mt-2" onClick={addToCart}>
                    Go to Cart
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}