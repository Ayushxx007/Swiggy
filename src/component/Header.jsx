import LOGO_URL from "../utils/constants.js";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js";


const Header = () => {

  const onlineStatus=useOnlineStatus();


  return (


    <div id="header" className="flex justify-between items-center bg-[#f0f0f0]">



       <div id ="logo">

       <img src={LOGO_URL} className="object-cover m-[5px] w-[120px] h-[120px] rounded-[10%] max-w-[100%]"></img>

       </div>
       <div id="navItems">
        <ul className="flex m-[10px] list-none">

            <li className="m-[10px] no-underline">Online Status:{onlineStatus?"🟢":"🔴"}</li>
            <li className="m-[10px] no-underline"><Link to= "/">Home</Link></li>
            <li className="m-[10px] no-underline"><Link to ="/about">About us</Link> </li>
            <li className="m-[10px] no-underline"><Link to ="/contact">Contact us</Link> </li>
            <li className="m-[10px] no-underline"><Link to ="/grocery">Grocery</Link></li>
            <li className="m-[10px] no-underline"><Link>mahika</Link></li>

        </ul>



       </div>





    </div>
  )
}

export default Header