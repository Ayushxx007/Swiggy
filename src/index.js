import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./component/Header.jsx";
import Body from "./component/Body.jsx";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Error from "./component/Error.jsx";
import  RestaurantMenu from "./component/RestaurantMenu.jsx";
import {useState,useEffect} from "react";
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import  Cart from "./component/Cart.jsx";

//import Grocery from "./component/Grocery.jsx";       

const Grocery=lazy(()=>import("./component/Grocery.jsx"));  // chunking,code Splitting, Dynamic Bundling, Lazy Loading, on Demand Loading


const AppLayout=()=>{

    //authentication
    const[userInfo,setUserInfo]=useState();

    useEffect(()=>{

        //make an api call
        const data={
            name:"mahika"
        }

        setUserInfo(data.name);

    },[])

    return (
       <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userInfo}}>

        <div id="ApplayOut">

       <Header/>
     
        <Outlet/>

        </div>
        </UserContext.Provider>
        </Provider>
     
    )

};


const appRouter=createBrowserRouter([

    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[

            {
                path:"/",
                element:<Body/>


            }
            
            
            ,{
            path:"/about",
            element:<About/>
            
        },
        {
            path:"/contact",
            element:<Contact/>    
    
        },

        {
            path:"/city/jaipur/:resId",
            element:<RestaurantMenu/>  
    
        },

        {
            path:"/grocery",
            element:  <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>


        },
        {
            path:"/cart",
            element:<Cart/>


        }
    ]
       

    }
   
]);



const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);