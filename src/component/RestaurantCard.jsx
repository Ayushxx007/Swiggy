import LOGO_URL from "../utils/constants.js";

const RestaurantCard = (props) => {

    let {obx}=props;
    let{res,cuisine,rating,time,image}=obx;




  return (
    <div id="containerx">

        <img src={image}></img>
        <h3 id="title">{res}</h3>
        <p id="description">{cuisine}</p>
        <div id="xyz">
            <div>{rating}</div>
            <div>{time} </div>

        </div>





    </div>
  )
}

export default RestaurantCard