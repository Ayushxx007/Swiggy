import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./component/Header.jsx";
import Body from "./component/Body.jsx";


const AppLayout=()=>{

    return (

        <div id="ApplayOut">

       <Header/>
        <Body/>

        </div>
     
    )

};



const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);