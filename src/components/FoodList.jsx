// import { useState } from "react";

import { Link } from "react-router-dom";
import { memo } from "react";
import useFetch from "../customHook/useFetch";

const FoodList = ({items,title,send}) => 
{
    // let [update,setUpdate]=useState();
    console.log("child componenet is rendered");
    let addFood=(id)=>
    {
      // console.log(id);
     fetch("http://localhost:4000/items/"+id)
     .then((response)=>{  return response.json() })
     .then((data)=>
     {
            // console.log(data);
            // localStorage.setItem("orders",JSON.stringify(data))
            // console.log(localStorage.getItem("orders"));//return string value
            let food=localStorage.getItem("orders")
            food=JSON.parse(food)//converting json object to js object
            food.push(data)
            food=JSON.stringify(food)
            localStorage.setItem("orders",food)
            
            
     })
    }
    let removeFood=(id)=>
    {
      let item=localStorage.getItem("orders")
      item=JSON.parse(item)
      // console.log(item);
      // let a=item.find((item)=>{ return item.id==id})//find() return value
      // console.log(a);
      let index=item.findIndex((item)=>{return item.id==id})
      // console.log(index);
      item.splice(index,1)
      item=JSON.stringify(item)
      localStorage.setItem("orders",item)
      window.location.reload()
    }
    return ( 
       <>
         <h1>{title}</h1>
         <div className="food-list">
         {
            items.map(food=>{
                return(
                    <div className="food" key={food.id}>
                       <Link  to={`/fooddetails${food.id}`} >
                       <img src={food.pic} alt="" className="img"/>
                        <h2 >{"FoodName"+":"+food.foodName.toUpperCase()}</h2>
                        <h3 >{"Price"+":"+food.price}</h3>
                       </Link>
                      {/* {console.log(food.id)} */}
                       {!send &&  <button onClick={()=>{addFood(food.id)}}>Add Food</button> }
                       {send && <button onClick={()=>{removeFood(food.id)}}>Remove Food</button>}
                        {/* {update && <h2 >{food.foodName}</h2>}
                        {update && <h6 >{food.price}</h6>} */}
                        {/* <h5 onClick={()=>{ setUpdate('updated')  }} style={{cursor:'pointer'}}>Show Details</h5> */}
                    </div>
                )
            })
         }
         </div>
        
       </>
     );
}
 
export default memo(FoodList);