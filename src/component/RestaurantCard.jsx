import LOGO_URL from "../utils/constants.js";
import {CLOUDINARY_BASE_URL} from "../utils/constants.js";


const RestaurantCard = (props) => {

  let {obx}=props;
  let{name,costForTwo,cuisines,avgRating,cloudinaryImageId}=obx.info;



// Construct the full URL for the image
const imageUrl = `${CLOUDINARY_BASE_URL+cloudinaryImageId}`;



  return (
    <div className="flex flex-col items-center rounded-[20px] m-[15px] border-2 border-black h-[35vh] w-[12vw]" id="containerx">

        <img src={imageUrl} className="object-cover m-[5px] w-[120px] h-[120px] rounded-[10%] max-w-[100%]"></img>
        <h3 id="title">{name}</h3>
        <p id="description">{cuisines}</p>
        <div className="w-[100%] flex flex-row justify-between items-center" id="xyz">
            <div className="m-[5px]">{avgRating}</div>
            <div className="m-[5px]" >{costForTwo} </div>

        </div>

    </div>
  )
}

export const EnhancedCard=(RestaurantCard)=>{

  return (props)=>{

    let {obx}=props;
    let{name,costForTwo,cuisines,avgRating,cloudinaryImageId}=obx.info;



    return (

      <div>

        <label className="absolute bg-black text-white m-1 p-0.5 rounded-md ">Promoted</label>
        <RestaurantCard {...props}/>


      
      </div>





    )



    

  





  }




}









export default RestaurantCard;



//Higher order Component (<RestaurantCard/>)==> <Enhahnced RestaurantCard/>

// A Higher-Order Component (HOC) in React is an advanced pattern for reusing component logic.
//  It’s a function that takes a component as an argument and returns a new component with enhanced functionality.