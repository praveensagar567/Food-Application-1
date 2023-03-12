import food from '../food.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => 
{
    // console.log(localStorage.getItem("orders"));//if key is not avaiable it will give null
    let store=localStorage.getItem("orders")
    if(store==null)
    {
        localStorage.setItem("orders","[]")
    }

    let[searchkey,setSearchKey]=useState("");
    return ( 
        <nav>
            <div className="logo">
            <Link to="/home"><img src={food} alt="logo" /></Link>
            <h1>Food Resturant</h1>
            </div>
            <div className="navlink">
                <div className="inp">
                    <input type="search" value={searchkey} onChange={(e)=>{setSearchKey(e.target.value)}} placeholder='Search for Food'/>
                    <Link to={`/search${searchkey}`} className='button'><button>Search</button></Link>
                </div>
                <div className="an">
                <Link to="/addfood">Add Food</Link>
                <Link to="/orders">Order</Link>
                </div>
            </div>

        </nav>
     );
}
 
export default Navbar;
