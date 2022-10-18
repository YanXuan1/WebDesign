
   import React from "react";
   
   import axios from "axios";
   


   const LogoutScreen = async () =>{

    try {
  
      const  res =  await axios.get(`/api/logout`);
      if (res.data.code == 0) {
        console.log(res.data)
        
        localStorage.setItem("cart", '');
        window.location = '/'
      }else{
        console.log(res.data)
      }
     
    } catch (error) {
     console.log(error)
    }

  }

  export default LogoutScreen;