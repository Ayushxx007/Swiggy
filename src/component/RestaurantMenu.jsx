
import Shimmer from "./Shimmer.jsx";
import {useParams} from  "react-router-dom";
import {CLOUDINARY_BASE_URL} from "../utils/constants.js";
import {useRestaurantMenu} from "../utils/useRestaurantMenu.js";
import RestaurantDetail from "./RestaurantDetail.jsx";
import {useState} from "react";



const RestaurantMenu = () => {

    
 const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);
const [showIndex,setShowIndex]=useState(null);

const dummy="dummy data";
 

    if(resInfo===null){ return <Shimmer/> }


    { /*   const  {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card ;
     console.log(itemCards); */ }

    const {name,id,city,costForTwo,cuisines,avgRating,cloudinaryImageId,locality}=resInfo?.data?.cards[2]?.card?.card?.info;
    //resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   

    const imageUrl = `${CLOUDINARY_BASE_URL+cloudinaryImageId}`;

    
  
  return (
    <div className="p-[20px] text-center" id="resInfo">

<div className="rounded-lg border-2 border-solid border-black">

<div className="flex justify-center items-center">



<img className="object-cover m-[5px] w-[120px] h-[120px] rounded-[10%] max-w-[100%]" src={imageUrl}></img>

</div>


       
        <h1 className="font-bold m-1 p-1 text-2xl"> name :{ name} </h1>
       
      <div className="flex justify-center items-center">
      <h2 className="mx-2"> id: {id}</h2>
      <h3 className="mx-2" >city: {city}</h3>
      </div>
        <h3> cost for two: Rs {costForTwo/100}</h3>
        <h3>cusines :{cuisines.join(", ")}</h3>
        <div className="flex justify-center items-center">
        <h3 className="mx-2" >rating :{avgRating}</h3>
        <h4 className="mx-2" >{locality}</h4>
        </div>
        </div>
        
       { /*  <h4>   {itemCards.map((ele)=>{return  <li key={ele?.card?.info?.id}>{ ele?.card?.info?.name} - ₨ {ele?.card?.info?.price/100}</li>}) } </h4> */ }
       



{categories.map((c,index)=>{ return <RestaurantDetail dummy={dummy} setShowIndex={()=>{setShowIndex(index)}} showItems={index===showIndex?true:false} key={c?.card?.card.title} data={c?.card?.card}/>})}






    </div>
  )
}

export default RestaurantMenu;


