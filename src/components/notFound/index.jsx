import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = ()=>{
    const navigate = useNavigate();

    return(<>
        <h1
        style={{margin:"auto", textAlign:"center"}}>404 Page not found</h1>
        <h1 style={{color:'blue', textAlign:"center", cursor:"pointer"}} onClick={()=>{navigate("/")}}>go to Home page</h1>
    </>)
}

export default NotFound;