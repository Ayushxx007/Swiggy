import User from "./User.jsx";
import UserClass from "./UserClass.jsx";
import React from "react";

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
    

    <UserClass location={"class location"} name={"class based copmponent"} />
    <UserClass location={" 2nd class location"} name={" 2nd class based copmponent"} />


  </div>)





  }




}





export default About;