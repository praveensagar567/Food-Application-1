import { useHistory } from "react-router-dom"

const Orderlist = ({items,title}) => 
{
    let history=useHistory()
    let removeFood=(orderid)=>
    {
        let index;
        let food=localStorage.getItem("orders")
        food=JSON.parse(food)
        food.map((value,i)=>
        { 
            if(value.id==orderid)
            {
                index=i;
            }
        })
        for(let i in food)
        {
            for(let {id} of food)
            {
                
                if(id==orderid)
                {
                    index=i;
                     break;
                }
            }
        }
        
        // console.log(index);
        // for(let i in check)
        // {
        //     if(check[i])
        //     {
        //         index=i;
        //     }
        // }
        // console.log(index)
    food.splice(index,1)
    // console.log(food);
    food=JSON.stringify(food)
    localStorage.setItem("orders",food)
    history.goBack()
    }
    return ( 
       <div>
        <h1>{title}</h1>
         <div className="food-list">
         {
            items.map(food=>{
                return(
                    <div className="food">
                       <img src={food.pic} alt="" className="img"/>
                        <h2 >{"FoodName"+":"+food.foodName.toUpperCase()}</h2>
                        <h3 >{"Price"+":"+food.price}</h3> 
                      {/* {console.log(food.id)} */}
                       <button onClick={()=>{removeFood(food.id)}}>Remove Order</button>
                        {/* {update && <h2 >{food.foodName}</h2>}
                        {update && <h6 >{food.price}</h6>} */}
                        {/* <h5 onClick={()=>{ setUpdate('updated')  }} style={{cursor:'pointer'}}>Show Details</h5> */}
                    </div>
                )
            })
         }
         </div>
       </div>
     );
}
 
export default Orderlist;