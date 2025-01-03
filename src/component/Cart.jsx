import {useSelector} from 'react-redux';
import Items from "./Items.jsx";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlice.js"

const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());

    }


  return (
    <div className="text-center m-5 p-5 font-bold">

       <h1 className="font-bold text-3xl">Cart</h1>

       <div className="p-1 m-1">    {cartItems.length===0  && <h1>Cart is Empty ,Add some items</h1>}</div>

    


       <div>
        <Items items={cartItems}></Items>
        <button onClick={handleClearCart} className="m-2 p-2 bg-black text-white rounded-md">Clear Cart</button>



       </div>
       











    </div>
  )
}

export default Cart;