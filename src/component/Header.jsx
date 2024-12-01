import LOGO_URL from "../utils/constants.js";

const Header = () => {
  return (
    <div id="header">

       <div id ="logo">

       <img src={LOGO_URL}></img>

       </div>
       <div id="navItems">
        <ul>

            <li>Home</li>
            <li>contact us</li>
            <li>about us</li>
            <li>yoyo</li>
            <li>mahika</li>

        </ul>



       </div>





    </div>
  )
}

export default Header