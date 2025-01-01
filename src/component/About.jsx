import User from "./User.jsx";
import UserClass from "./UserClass.jsx";
import React from "react";
import UserContext from "../utils/UserContext.js";


class About extends React.Component{

  constructor(props){
    super(props);


  }

  componentDidMount(){
  
  }


render(){



  return (

    

    <div className="About">
    About

    

      <UserContext.Consumer>
        {
          ({loggedInUser})=>{<h2>{loggedInUser}</h2>}

        }

      </UserContext.Consumer>

    
   
    

    <UserClass location={"class location"} name={"class based copmponent"} />
    <UserClass location={" 2nd class location"} name={" 2nd class based copmponent"} />


  </div>)



  }


}



export default About;