import LOGO_URL from "../utils/constants.js";

const RestaurantCard = (props) => {

  let {obx}=props;
  let{id,name,costForTwo,cuisines,avgRating,cloudinaryImageId}=obx.info;

  const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/demo/image/upload/";

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