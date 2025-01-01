import Items from "./Items.jsx";
import { useState } from "react";

const RestaurantDetail = ({data,showItems,setShowIndex,dummy}) => {

 // const [showItems,setShowItems]=useState(false);

  const handleClick=()=>{

 setShowIndex();
    

  }
  


  return (
    <div>

      <div className="w-[60vw] m-auto my-3 py-2 bg-[#f0f0f0] shadow-lg p-1">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span  className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span> ⇣ </span>

        </div>

        {
          showItems &&  <Items dummy={dummy} items={data.itemCards}/>


        }

       
      </div>

   
   


{/*    Accordian body        */}





    </div>
  )
}

export default RestaurantDetail;