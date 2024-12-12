import LOGO_URL from "../utils/constants.js";

const RestaurantCard = (props) => {

  let {obx}=props;
  let{id,name,costForTwo,cuisines,avgRating,cloudinaryImageId}=obx.info;

  const CLOUDINARY_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Construct the full URL for the image
const imageUrl = `${CLOUDINARY_BASE_URL+cloudinaryImageId}`;



  return (
    <div id="containerx">

        <img src={imageUrl}></img>
        <h3 id="title">{name}</h3>
        <p id="description">{cuisines}</p>
        <div id="xyz">
            <div>{avgRating}</div>
            <div>{costForTwo} </div>

        </div>





    </div>
  )
}

export default RestaurantCard