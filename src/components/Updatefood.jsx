import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
//method-
//1.POST->create
//2.GET->reading
//3.PUT->updating
//4.DELETE->
const Updatefood = () =>
 {
    let {id}=useParams()
    let history=useHistory()
    
    let[foodName,setFoodName]= useState("")
    let[price,setPrice]=useState("")
    let[rating,setRating]=useState("")
    let[pic,setPic]=useState("")
    let[type,setType]=useState("")
    // let foodName=useRef(),price=useRef(),rating=useRef(),pic=useRef(),history=useHistory();
    // let updateNewFood=(e)=>
    // {
    //     e.preventDefault()
    //     // console.log(price.current.value);//value inside the input tag
    //     // console.log(foodName.current.value);
    //     let items=
    //                 {
    //                     foodName:foodName.current.value,
    //                     price:price.current.value,
    //                     type:"",
    //                     rating:rating.current.value,
    //                     pic:pic.current.value
    //                 }
    //                 console.log(items);
    //     let option=document.getElementsByName("type");
    //     // console.log(option[1].value);//checked property return true or false
    //     for(let i in option)
    //     {
    //         if(option[i].checked)
    //         {
    //             items.type=option[i].value;
    //         }
            
    //     }
    //     // console.log(items.type);
    //  let check=   fetch("http://localhost:4000/items/"+id,
    //                                         {
    //                                             method:"PUT",
    //                                             headers:{"Content-Type":"application/json"},
    //                                             body:JSON.stringify(items)
    //                                         }
    //     )
    //     .then(()=>
    //     {

    //         alert("updated food is added")
    //         history.goBack();
    //     })
        
    //     console.log(check.ok);

    // }
    // let updateFood=(e)=>
    // {
    //     e.preventDefault()
    //     let foodupdate={
    //                     foodName:foodName.current.value,
    //                     price:price.current.value,
    //                     type:"",
    //                     rating:rating.current.value,
    //                     pic:pic.current.value
    //                    }
    //     let option=document.getElementsByName("type");
    //     // console.log(option);//return nodelist of array
    //     for(let i in option)
    //     {
    //         if(option[i].checked)
    //         {
    //             foodupdate.type=option[i].value
    //         }
    //     }
    //     fetch("http://localhost:4000/items/"+id,
    //                                                 { 
    //                                                     method:"PUT",
    //                                                     headers:{"Content-Type":"application/json"},
    //                                                     body:JSON.stringify(foodupdate)
    //                                                 }
    //         )
    //         // .then((response)=>{
    //         //     if(response.ok)
    //         //     {
    //         //         return response.json()
    //         //     }
    //         // })
    //         // .then((data)=>{console.log(data)})
    //         .then(()=>{
    //             alert("Food has been updated")
    //             history.goBack()
    //         })
    // }
    // let {data,error,pending}=useFetch("http://localhost:4000/items/"+id)//not work
    // if(data!=null)
    // {
    //     console.log(data);
    //     setFoodName(data.foodName)
    // }
    // useEffect(()=>
    // {
    //     fetch("http://localhost:4000/items/"+id)
    //     .then((resp)=>
    //     {   return resp.json()
    //     })
    //     .then((data)=>
    //     {
    //         setFoodName(data.foodName)
    //         setPrice(data.price)
    //         setRating(data.rating);
    //         setPic(data.pic)

    //         // console.log(data.foodName);
    //     })
    // },[])
    useEffect(()=>
    {
        fetch("http://localhost:4000/items/"+id)
        .then((response)=>{ return response.json()})
        .then((data)=>
        { 
            setFoodName(data.foodName)
            setPrice(data.price)
            setPic(data.pic)
            setRating(data.rating)

        })
    },[])
    // console.log(foodName,price,pic,rating);
    let updateFood=(e)=>
    {
        e.preventDefault()
        let foodupdate={foodName,price,type,rating,pic}
        // console.log(foodupdate);
        fetch("http://localhost:4000/items/"+id,
                                                {
                                                    method:"PUT",
                                                    headers:{"Content-Type":"application/json"},
                                                    body:JSON.stringify(foodupdate)
                                                })
        .then(()=>
        {
            alert("Food data as been updated")
            history.goBack()
        })

    }
 
    return ( 
       <div className="form">
        <form onSubmit={updateFood}>
            <h1>Food New Food</h1>
            <div className="addfood">
                <ul>
                    <li>
                        <h3 >Food Name:</h3>
                        <input type="text"   placeholder="Food Name"  value={foodName} onChange={(e)=>{setFoodName(e.target.value)}}/>
                        {/* {console.log(foodName.current,typeof foodName)} */}
                    </li>
                    <li>
                        <h3 className="price">Price :</h3>
                        <input type="number" placeholder="Enter Amount" min="100" max="300"  step="10" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    </li>
                    <li>
                        <h3 className="type">Type:
                            {/* <select >
                                <option value="">Select</option>
                                <option >Non-Veg</option>
                                <option >Veg</option>
                            </select> */}
                            <input type="radio" name="type"  value={"Non-Veg"} onClick={(e)=>{setType(e.target.value)}}/>Non-Veg
                            <input type="radio" name="type" value={"Veg"}  onClick={(e)=>{setType(e.target.value)}}/>Veg
                        </h3>
                    </li>
                    <li>
                        <h3>Rating:</h3>
                        <input type="number" min="1" max="10" placeholder="Rating" step={"0.1"}  value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
                    </li>
                    <li>
                        <h3>Picture Url:</h3>
                        <input type="url" value={pic} onChange={(e)=>{setPic(e.target.value)}} />
                    </li>
                    <li>
                        <button>Add Food</button>
                    </li>
                </ul>
            </div>
        </form>
        {/* <div className="h1">
            <h1>Add Food</h1>
        </div> */}
       </div>
       
     );
}
 
export default Updatefood;