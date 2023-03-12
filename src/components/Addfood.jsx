import { useReducer, useRef } from "react";
import { useHistory } from "react-router-dom";

let reducer = (state, action) => {
    console.log(action)
    switch(action[0])
    {
        case "foodName":return {...state,foodName:action[1]}
        case "price":return {...state,price:action[1]}
        case "rating":return {...state,rating:action[1]}
        case "pic":return{...state,pic:action[1]}
        case "type":return{...state,type:action[1]}
        default:return{...state}
    }

}
const Addfood = () => {
    // let foodName=useRef(),price=useRef(),rating=useRef(),pic=useRef(),history=useHistory();
    // let addNewFood=(e)=>
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
    //  let check=   fetch("http://localhost:4000/items",
    //                                         {
    //                                             method:"POST",
    //                                             headers:{"Content-Type":"application/json"},
    //                                             body:JSON.stringify(items)
    //                                         }
    //     )
    //     .then(()=>
    //     {
    //         alert("new food is added")
    //         history.goBack();
    //     })
    //     console.log(check.then(()=>{}));

    // }
    // let foodName=useRef(),price=useRef(),rating=useRef(),pic=useRef();
    let his = useHistory()
    //     let addFood=(e)=>
    //     {
    //         e.preventDefault()
    //         // console.log(foodName.current.value);
    //         let food={
    //                     foodName:foodName.current.value,
    //                     price:price.current.value,
    //                     type:"",
    //                     rating:rating.current.value,
    //                     pic:pic.current.value

    //                 }

    //                 //checked->return true or false
    //                 let option=document.getElementsByName("type")
    //                 for(let i=0;i<option.length;i++)
    //                 {
    //                     // console.log(option[i].checked);
    //                     if(option[i].checked)
    //                     {
    //                         food.type=option[i].value
    //                     }
    //                 }
    // //   console.log(food);
    //         fetch("http://localhost:4000/items",   {
    //                                                             method:"POST",
    //                                                             headers:{"Content-Type":"application/json"},
    //                                                             body:JSON.stringify(food)

    //                                                         } 
    //                     )
    //         .then(()=>
    //         {
    //             alert("Food as been added")
    //             his.goBack()
    //         })

    //     }
    let [state, dispatch] = useReducer(reducer, {
        foodName: "",
        price:"",
        type: "",
        rating: "",
        pic: ""

    })
    let addFood=(e)=>
    {
        e.preventDefault()
        // console.log(JSON.stringify(state))
        fetch("http://localhost:4000/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(state)})
        .then(()=>{alert("food as been added to data base");his.push("/home")})
    }
    return (
        <div className="form">
            <form onSubmit={addFood}>
                <h1>Food New Food</h1>
                <div className="addfood">
                    <ul>
                        <li>
                            <h3 >Food Name:</h3>
                            <input type="text" placeholder="Food Name" onChange={(e) =>{dispatch([e.target.name,e.target.value])}} value={state.foodName} name="foodName"/>
                            {/* {console.log(foodName.current,typeof foodName)} */}
                        </li>
                        <li>
                            <h3 className="price">Price :</h3>
                            <input type="number" name="price" placeholder="Enter Amount" min="100" max="300" step="10" value={state.price} onChange={(e) =>{dispatch([e.target.name,e.target.value])}}/>
                        </li>
                        <li>
                            <h3 className="type">Type:
                                {/* <select >
                                <option value="">Select</option>
                                <option >Non-Veg</option>
                                <option >Veg</option>
                            </select> */}
                                <input type="radio" name="type" value={"Non-Veg"} onChange={(e)=>{dispatch([e.target.name,e.target.value])}}/>Non-Veg
                                <input type="radio" name="type" value={"Veg"} onChange={(e)=>{dispatch([e.target.name,e.target.value])}}/>Veg
                            </h3>
                        </li>
                        <li>
                            <h3>Rating:</h3>
                            <input type="number" name="rating" min="1" max="10" placeholder="Rating" step="0.1" value={state.rating} onChange={(e)=>{dispatch([e.target.name,e.target.value])}}/>
                        </li>
                        <li>
                            <h3>Picture Url:</h3>
                            <input type="url" value={state.pic} onChange={(e) =>{dispatch([e.target.name,e.target.value])}} name="pic"/>
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

export default Addfood;