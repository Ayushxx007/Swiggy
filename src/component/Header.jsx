import LOGO_URL from "../utils/constants.js";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js";


const Header = () => {

  const onlineStatus=useOnlineStatus();


  return (
    <div id="header">

       <div id ="logo">

       <img src={LOGO_URL}></img>

       </div>
       <div id="navItems">
        <ul>

            <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
            <li><Link to= "/">Home</Link></li>
            <li><Link to ="/about">About us</Link> </li>
            <li><Link to ="/contact">Contact us</Link> </li>
            <li><Link to ="/grocery">Grocery</Link></li>
            <li><Link>mahika</Link></li>

        </ul>



       </div>





    </div>
  )
}

export default Header