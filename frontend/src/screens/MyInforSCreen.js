import React from "react";
import axios from "axios";
import "./MyInforSCreen.css";
// Components



const MyInforSCreen = () => {

    var initdata;
  

  const  fetchData = async () => {

          initdata =  await axios.get(`/api/myinfor`)
          console.log(initdata.data.data.user )
          if (initdata.data.data.user) {
          document.getElementById("name").value = initdata.data.data.user.userName
          document.getElementById("pass").value = '';
          document.getElementById("repass").value = '';
          document.getElementById("email").value = initdata.data.data.user.userEmail
          }
          
         }
     
         fetchData();
 


  const save = async (e) => {
    
    const sendData={
        "id":initdata.data.data.user._id,
        "userName":document.getElementById("name").value,
        "userPass":document.getElementById("pass").value,
        "userEmail":document.getElementById("email").value,

    }



    //validation 
    var regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    var regPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    if (sendData.userName=="") {
      window.alert('userName should not be empty')
      return
    }
    if (sendData.userPass=="") {
      window.alert('userPass should not be empty')
      return
    }
    if (sendData.userEmail=="") {
      window.alert('userEmail should not be empty')
      return
    }

    if(!sendData.userPass.trim().match(regPassword)){
      window.alert('not strong password format')
      return
     }

     if(sendData.userPass != document.getElementById("repass").value ){
      window.alert('The passwords are inconsistent  ')
      return
     }


    if(!sendData.userEmail.trim().match(regEmail)){
      window.alert('not email format')
      return     
    }








    try {
  
      const  res = await axios.put(`/api/myinfor`, sendData);
      if(res.data.code==0){
        window.alert('save correctly')
        localStorage.setItem("userName", document.getElementById("name").value)   
        window.location.reload();
      }
      else{
        window.alert(res.data.msg)
      }
     
     
     
     
    } catch (error) {
     console.log(error)
    }
 
  }




  
  
 
  return (
      <div>
    {/* <div id = "myInfor">
    <div class="">
    
		<form action="">
			<div class="item">
				<input id="name" type="text" />
				<label for="">User Name</label>
			</div>
			<div class="item">
				<input id="pass" type="text"  />
				<label for="">User Password</label>
			</div>
            <div class="item">
				<input id="email" type="email"  />
				<label for="">User Email</label>
			</div>
			<button class="btn" type="button" onClick={(e)=>save()}>Save</button>
          
		</form>
  </div>  
  </div>   */}
  <div id = "myInfor">
    <div class="loginBox">
    <h1>My Profile</h1>
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
				<label for="">Comfirm Password</label>
			</div>
      <div class="item">
				<input id="email" type="email" required="required"/>
				<label for="">Email</label>
			</div>
			<button class="btn" type="button" onClick={(e)=>save()}>Save Change
      <span></span>
				<span></span>
				<span></span>
				<span></span>
      </button>
      {/* <div class="msg">
            Already have an account? 
           <a href="/login" > &nbsp; Login in</a>
      </div> */}
		</form>
  </div>  
  </div> 
 
  
      </div>
      
 

  );

  

  
};

export default MyInforSCreen;



