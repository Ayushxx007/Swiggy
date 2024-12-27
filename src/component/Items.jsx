import {CDN_URL} from "../utils/constants.js"
import {CLOUDINARY_BASE_URL} from "../utils/constants.js";
const Items = ({items}) => {

    console.log(items);
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
        <img className="object-cover m-[5px] w-[120px] h-[120px] rounded-[10%] max-w-[100%]" src={CLOUDINARY_BASE_URL+item.card.info.imageId}></img>
        


</div>


)}



        </ul>













    </div>






  )
}

export default Items;