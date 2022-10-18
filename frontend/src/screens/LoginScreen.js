import React from "react";
// import "./HomeScreen.css";
import axios from "axios";
import "./LoginScreen.css";
// Components



const LoginScreen = () => {

  const login2 = async (e) => {
    
    const loginData={
        "userName":document.getElementById("name").value,
        "userPass":document.getElementById("pass").value,
  
    }

      if (loginData.userName=="") {
        window.alert('userName should not be empty')
        return;
      }

      if (loginData.userPass=="") {
        window.alert('userPass should not be empty')
        return;
      }


    try {
  
      const  res = await axios.post(`/api/login`, loginData);
      if (res.data.code == 0) {
        localStorage.setItem("userName", res.data.data.user.userName)     
        //console.log( res.data.data.user)
        window.location = '/home'
      }
      else if(res.data.code == 111){
      
        window.location = '/adminUsers'
      }
      else if(res.data.code == 188){
        window.alert('user is already log in')
        window.location = '/home'
      }
      else{
        window.alert(res.data.msg)
        console.log(res.data)
      }
     
    } catch (error) {
     console.log(error)
    }
 
  }




  
  
 
  return (
      <div> 
      {/* // <form>
      // <label>userName</label> 
      // <input id="name"></input>
      // <label>userPass</label> 
      // <input id="pass"></input>
      // <button type="button" onClick={(e)=>login2()} >LOGIN</button>
      // </form> */}
      
    <div id = "login">
    <div class="loginBox"onSubmit>
    <h1>Login</h1>
		<form action="">
			<div class="item">
				<input id="name" type="text" required ="required"/>
				<label for="">User Name</label>
			</div>
			<div class="item">
				<input id="pass" type="password"  required ="required"/>
				<label for="">User Password</label>
			</div>
			<button class="btn" type="button" onClick={(e)=>login2()}>Login
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</button>
      <div class="msg">
            Don't have an account? 
           <a href="/regist" > &nbsp; Sign up</a>
      </div>
		</form>
  </div>  
  </div>  
      </div>
 

  );

  

  
};

export default LoginScreen;



