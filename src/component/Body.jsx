import RestaurantCard from "./RestaurantCard.jsx"
import Shimmer from "./Shimmer.jsx"
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js";


const Body = () => {

    const [listOfRestaurants, setRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");


    useEffect(()=>{
      fetchData();
      
    },[]);

   

    const fetchData=async()=>{   

       let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       let response=await data.json();
       const restaurants= response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


       setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);


    };

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false){
      

      return <h1>Looks like you are offline please check your interent connection</h1>


    }


    if(listOfRestaurants.length==0){

        return <Shimmer/>
    }


  return (
    <div id="body">

        <div id="body1">
            <input type="text" placeholder="search"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button onClick={()=>{const filteredRestaurant=listOfRestaurants.filter((restaurant)=>{ return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())});
            setFilteredRestaurants(filteredRestaurant);}}>Search</button>


            <button onClick={ ()=>{
                const xyz=listOfRestaurants.filter(res=> res.info.avgRating>4);
                setFilteredRestaurants(xyz);
            }
           

            } >Filter</button>

        </div>


      <div id="rescard">

     { filteredRestaurants.map(rest=>( 


     <Link   key ={rest.info.id} to={"/city/jaipur/"+rest.info.id}>

      <RestaurantCard obx={rest}/>

      </Link>

     
      
      )
      
      )};


     


      </div>






    </div>
  )
}

export default Body