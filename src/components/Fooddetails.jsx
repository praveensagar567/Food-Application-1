
//Router Parameter
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
const Fooddetails = () => 
{
    let color;
    let {id}=useParams();
    // let[items,setItems]=useState(null);
    // let[load,setLoad]=useState(true);
    // let[mess,setMess]=useState(null)
    // useEffect(()=>
    // {
    //     setTimeout(()=>
    //     {
    //         fetch("http://localhost:4000/items/"+id).then((resolve)=>
    //     {
    //             if(resolve.ok)
    //             {
    //                 return resolve.json();
    //             }
    //             else
    //             {
    //                 throw Error("Order of food cannot fetch");
    //             }
    //      })
    // .then((data)=>{
    //     setItems(data);setLoad(false)
    // })
    // .catch((err)=>{
    //     setMess(err.message);setLoad(false)
    // })
    //     },3000)
    // },[])
    // let history=useHistory()
    // function orderFoodDelete()
    // {
    //     fetch("http://localhost:4000/items/"+id,{method:"DELETE"})
    //     .then(()=>
    //     {
    //         alert("Food As been removed")
    //         history.push("/")
    //     })
    // }
    // console.log(history);
    let history=useHistory()
    let removeFood=()=>
    {
       fetch("http://localhost:4000/items/"+id,{
                                                    method:"DELETE",
                                                }
             )
            .then(()=>{
                history.goBack()
            }) 
    }
   let{data:items,pending:load,error:mess}=useFetch("http://localhost:4000/items/"+id)
    return (  
        // <h1>This my Order Component Function{price}</h1>
        <div>
            {mess &&  <h1>{mess}</h1> }
            {load && <div className="load"> </div>}
            {items &&  <div className="main">
                        <div className="order">
                        <img src={items.pic} alt="food"  className="image"/>
                        </div>
                        <div className="content">
                        <h1>{items.foodName}</h1>
                        <h3>{items.price}</h3>
                        <h3 className={items.type=="Veg"?"veg":"non-veg"}>Colorname-{items.type}</h3>
                        <button className="remove" onClick={removeFood}>Remove Food</button>
                        <Link to={`/update${items.id}`} ><button className="update">Update Food</button></Link>
                        </div>                       
                     </div> }
        </div>
    );
}
 
export default Fooddetails;