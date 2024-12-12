import {useRouteError} from "react-router-dom";

const Error = () => {


    const err= useRouteError();
   
  return (
    <div>Error

{err.status}


    </div>
   
  )
}

export default Error