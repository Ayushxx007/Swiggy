import  {useEffect,useState} from "react";
import Shimmer from "./Shimmer.jsx";
import {useParams} from  "react-router-dom";
import {MENU_API} from "../utils/constants.js";




const RestaurantMenu = () => {

    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
 


    useEffect(()=>{
        fetchMenu();

    },[]);

    const fetchMenu=async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();

        setResInfo(json);



        console.log(json);
    };

    if(resInfo===null){
        return <Shimmer/>
    }


    { /*   const  {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card ;
     console.log(itemCards); */ }

    const {name,id,city,costForTwo,cuisines,avgRating}=resInfo?.data?.cards[2]?.card?.card?.info;

  
  return (
    <div id="resInfo">

        <h1> name :{ name} </h1>
        
        <h2> id: {id}</h2>
        <h3>city: {city}</h3>
        <h3> cost for two: {costForTwo}</h3>
        <h3>cusines :{cuisines.join(", ")}</h3>
        <h3>rating :{avgRating}</h3>

    
       { /*  <h4>   {itemCards.map((ele)=>{return  <li key={ele?.card?.info?.id}>{ ele?.card?.info?.name} - ₨ {ele?.card?.info?.price/100}</li>}) } </h4> */ }
       
    </div>
  )
}

export default RestaurantMenu;


