
import Shimmer from "./Shimmer.jsx";
import {useParams} from  "react-router-dom";
import {CLOUDINARY_BASE_URL} from "../utils/constants.js";
import {useRestaurantMenu} from "../utils/useRestaurantMenu.js";




const RestaurantMenu = () => {

    
const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);
 

    if(resInfo===null){ return <Shimmer/> }


    { /*   const  {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card ;
     console.log(itemCards); */ }

    const {name,id,city,costForTwo,cuisines,avgRating,cloudinaryImageId,locality}=resInfo?.data?.cards[2]?.card?.card?.info;
    //resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    const imageUrl = `${CLOUDINARY_BASE_URL+cloudinaryImageId}`;

    console.log(resInfo);
  
  return (
    <div className="p-[20px]" id="resInfo">


        <img className="object-cover m-[5px] w-[120px] h-[120px] rounded-[10%] max-w-[100%]" src={imageUrl}></img>
        <h1> name :{ name} </h1>
        <h2> id: {id}</h2>
        <h3>city: {city}</h3>
        <h3> cost for two: Rs {costForTwo/100}</h3>
        <h3>cusines :{cuisines.join(", ")}</h3>
        <h3>rating :{avgRating}</h3>
        <h4>{locality}</h4>

    
       { /*  <h4>   {itemCards.map((ele)=>{return  <li key={ele?.card?.info?.id}>{ ele?.card?.info?.name} - ₨ {ele?.card?.info?.price/100}</li>}) } </h4> */ }
       
    </div>
  )
}

export default RestaurantMenu;


