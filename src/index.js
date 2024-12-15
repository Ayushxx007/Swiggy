import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./component/Header.jsx";
import Body from "./component/Body.jsx";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Error from "./component/Error.jsx";
import  RestaurantMenu from "./component/RestaurantMenu.jsx";
//import Grocery from "./component/Grocery.jsx";       

const Grocery=lazy(()=>import("./component/Grocery.jsx"));  // chunking,code Splitting, Dynamic Bundling, Lazy Loading, on Demand Loading


const AppLayout=()=>{

    return (

        <div id="ApplayOut">

       <Header/>
     
        <Outlet/>

        </div>
     
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


        }
    ]
       

    }
   
]);



const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);