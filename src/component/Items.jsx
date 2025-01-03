import {CDN_URL} from "../utils/constants.js"
import {CLOUDINARY_BASE_URL} from "../utils/constants.js";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice.js";

const Items = ({items,dummy}) => {

  console.log(dummy);

  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    //dispatch an action
    dispatch(addItem(item));
    


  }

   
  return (

    <div>

        <ul>
{items.map(item=> <div className="p-2 m-2 border-black border-b-2 text-left flex justify-between" key={item.card.info.id}>

   
   <div>
    <div className="p-1">

        <span>{item.card.info.name}</span> 
        <span className="mx-1"> ₹{item.card.info.price ? item.card.info.price/100: item.card.info.defaultPrice/100}</span>
        
        </div>

        <p className="text-xs">
        {item.card.info.description}

        </p>

        </div>
        <div>
        <img className="object-cover m-[5px] w-[120px] h-[120px] rounded-[10%] max-w-[100%]" src={CLOUDINARY_BASE_URL+item.card.info.imageId}></img>
        <button onClick={()=>handleAddItem(item)} className=" rounded-md relative bottom-7 left-2 bg-[grey] text-white p-1 m-1">+Add</button>
        </div>
        


</div>


)}


        </ul>


    </div>

  )
}

export default Items;

// props drilling is the problem and the solution is Context api