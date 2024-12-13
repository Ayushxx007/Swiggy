import {useState} from "react";

const User = (props) => {


    const [stateVariable,setStateVariable]=useState(0);

    const{name,location}=props;


  return (
    <div className="user-card">

        <button onClick={()=>{setStateVariable(stateVariable+1)}}>click me functional component</button>
        <h2>{stateVariable}</h2>


        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>contact</h4>

    </div>
  )
}

export default User;
