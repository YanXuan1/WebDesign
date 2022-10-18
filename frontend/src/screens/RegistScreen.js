import React from "react";
import "./HomeScreen.css";
import axios from "axios";
import "./RegistScreen.css";

// Components


const RegistScreen  = () =>  {

  const Regist = async (e) => {
      
        const registerData={
            "userName":document.getElementById("name").value,
            "userPass":document.getElementById("pass").value,
            "userEmail":document.getElementById("email").value,
        }


        //validation 
        var regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        var regPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

        if (registerData.userName=="") {
          window.alert('userName should not be empty')
          return
        }
        if (registerData.userPass=="") {
          window.alert('userPass should not be empty')
          return
        }
        if (registerData.userEmail=="") {
          window.alert('userEmail should not be empty')
          return
        }

        if(!registerData.userPass.trim().match(regPassword)){
          window.alert('not strong password format')
          return
         }

         if(registerData.userPass != document.getElementById("repass").value ){
          window.alert('The passwords are inconsistent  ')
          return
         }


        if(!registerData.userEmail.trim().match(regEmail)){
          window.alert('not email format')
          return     
        }
     
        



        try {
      
          const  res = await axios.post(`/api/regist`, registerData);

          if (res.data.code ==0) {
            window.alert(res.data.msg)
            window.location = "/";
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
        {/* <form>
      <label>userName</label> 
      <input id='name'></input>
      <label>userPass</label> 
      <input id='pass'></input>
      <label>userEmail</label> 
      <input id='email'></input>
      <button type="button" onClick={(e)=>Regist()} >register</button>
  </form> */}

  <div id = "regist">
    <div class="loginBox">
    <h1>Register</h1>
		<form action="">
			<div class="item">
				<input id="name" type="text" required="required"/>
				<label for="">User Name</label>
			</div>
			<div class="item">
				<input id="pass" type="password" required="required"/>
				<label for="">User Password</label>
			</div>
      <div class="item">
				<input id="repass" type="password" required="required"/>
				<label for="">Confirm Password</label>
			</div>
      <div class="item">
				<input id="email" type="email" required="required"/>
				<label for="">Email</label>
			</div>
			<button class="btn" type="button" onClick={(e)=>Regist()}>Register
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</button>
      <div class="msg">
            Already have an account? 
           <a href="/" > &nbsp; Login in</a>
      </div>
		</form>
  </div>  
  </div>  
  
  </div>
 
  );
  
};

export default RegistScreen;
