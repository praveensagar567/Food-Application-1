import FoodList from "./FoodList";

const Order = () => 
{
   let items= localStorage.getItem("orders")
//    console.log(food);
    items=JSON.parse(items)
    // console.log(items);
   
    return (  
        <div>
            {items && <FoodList items={items} title={"Order Food"} send={true}/>}
        </div>
    );
}
 
export default Order;
