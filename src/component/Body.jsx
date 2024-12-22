import RestaurantCard,{EnhancedCard} from "./RestaurantCard.jsx"
import Shimmer from "./Shimmer.jsx"
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js";


const Body = () => {

    const [listOfRestaurants, setRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");

      const EnhancedRestaurantCard=EnhancedCard(RestaurantCard);

    console.log(listOfRestaurants);


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

        <div id="body1" className="p-[10px] m-[10px]">
            <input className="p-[10px] m-[10px] rounded-[10px] border border-black " type="text" placeholder="search"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button className="p-[10px] m-[10px] rounded-[10px] border border-black hover:bg-[#f0f0f0] " onClick={()=>{const filteredRestaurant=listOfRestaurants.filter((restaurant)=>{ return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())});
            setFilteredRestaurants(filteredRestaurant);}}>Search</button>


            <button className="p-[10px] m-[10px] rounded-[10px] border 1 border-black hover:bg-[#f0f0f0]" onClick={ ()=>{
                const xyz=listOfRestaurants.filter(res=> res.info.avgRating>4);
                setFilteredRestaurants(xyz);
            }
           

            } >Filter</button>

        </div>


      <div className="flex flex-wrap flex-row" id="rescard">

      {filteredRestaurants.map(rest => (
  <Link key={rest.info.id} to={"/city/jaipur/" + rest.info.id}>
    {rest.info.name === "Chinese Wok" ? (
      <EnhancedRestaurantCard obx={rest} />
    ) : (
      <RestaurantCard obx={rest} />
    )}
  </Link>
))}



     


      </div>






    </div>
  )
}

export default Body