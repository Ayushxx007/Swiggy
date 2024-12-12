import RestaurantCard from "./RestaurantCard.jsx"
import Shimmer from "./Shimmer.jsx"
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");


    useEffect(()=>{
        console.log("mahika");
        fetchData();
      
    },[]);

    console.log("ganduka");

    const fetchData=async()=>{   

       let data= await fetch("http://localhost:4999/data");
       let response=await data.json();
       setRestaurants(response.restaurants);
      
       setFilteredRestaurants(response.restaurants);

    }
    if(listOfRestaurants.length==0){

        return <Shimmer/>
    }





  return (
    <div id="body">

        <div id="body1">
            <input type="text" placeholder="search"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button onClick={()=>{const filteredRestaurant=listOfRestaurants.filter((restaurant)=>{ return restaurant.res.toLowerCase().includes(searchText.toLowerCase())});
            setFilteredRestaurants(filteredRestaurant);}}>Search</button>


            <button onClick={ ()=>{
                const xyz=listOfRestaurants.filter(res=> res.rating>4.5);
                setFilteredRestaurants(xyz);
            }
           

            } >Filter</button>

        </div>


      <div id="rescard">

     { filteredRestaurants.map(rest=>( 


       

      <RestaurantCard key ={rest.res} obx={rest}/>

   
      
      )
      
      )};


     


      </div>






    </div>
  )
}

export default Body