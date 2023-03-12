import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodList from "./FoodList";
import useFetch from "../customHook/useFetch";
const Searchfood = () => {
   let {searchkey}=useParams();
//    let[items,setItems]=useState()
//     let[load,setLoad]=useState(true)
//     let[mess,SetMessage]=useState()
// useEffect(()=>
// {
//     // fetch("http://localhost:4000/items&quot;")
    
//     setTimeout(()=>
//     {
//         fetch("http://localhost:4000/items/") .then((resolve)=>
//     {
//         if(resolve.ok)
//         {
//             console.log(resolve.ok);
//             return resolve.json();
//         }
//         else 
//         {
//             console.log(resolve.ok);
//             console.log(searchkey.toLowerCase());
//             throw Error("Food can't fetch")
//         }
//     })
//     .then((data)=>
//     {
//         setItems(data);setLoad(false);
//     })
//     .catch((err)=>{SetMessage(err.message);setLoad(false)})
//     },3000)
// },[])
let{data:items,pending:load,error:mess}=useFetch("http://localhost:4000/items")
    return (  
        <div>
            { mess && <h1>{mess}</h1> }
            {load && <div className="load"> </div>}
            {/* {items && <FoodList items={items.filter((food)=>{return food.foodName.toLowerCase()==searchkey.toLowerCase()})} title={"search food"}/>} */}
            {items && <FoodList items={items.filter(data=>data.foodName.toLowerCase().includes(searchkey.toLowerCase()))} title={"search food"}/>}
            {/* {items && <FoodList items={items.filter((food)=> { return food.foodName.includes().searchkey})} title={"search food"}/>} */}
            {/* {"chiken biryani".includes()} */}

        </div>
        // <h1>{ console.log(searckey)} hello</h1>
    );
}
 
export default Searchfood;