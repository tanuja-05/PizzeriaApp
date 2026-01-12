import axios from 'axios'
export default function CartItem({itemimage,itemname,itemprice,itemtype,itemquantity,itemdecrease,itemincrease,deleteItem,customIngredients}){
    let isVeg = itemtype==="veg";

    

    return(
        <>
            <div className="container bg-light shadow rounded p-2 m-2
           text-center">
                <div>
                    <img 
                    src={itemimage}
                    className="img-fluid rounded" 
                    style={{"width":"120px","height":"120px"}} 
                    alt="logo" />
                </div>
                <div className="d-flex justify-content-center p-2">
                    <div className=" m-2" style={{"width":"20px","height":"20px","background":isVeg?"green":"red"}}></div>
                    <span className="mt-1">{itemname}</span>
                </div>
                  <h4>Add Ons : </h4>
                {
                    customIngredients.length!==0?
                    customIngredients.map((item,index)=>{
                        return(
                            <>
                             <div>
                                {item+","}
                             </div>
                            </>
                        );
                    }) : "None"
                }
                <div className="d-flex justify-content-center p-2">
                    <div className="m-2" >₹ {itemprice}</div>
                    <button className="btn btn-danger rounded text-white" onClick={itemdecrease}>-</button>
                     <span className="m-2">{itemquantity}</span>
                    <button className="btn btn-success rounded text-white" onClick={itemincrease}>+</button>
                </div>
                <div><button className="btn btn-danger" onClick={deleteItem}>Remove</button></div>
            </div>
        </>
    )
}