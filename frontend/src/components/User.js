import React from 'react'

import "./User.css";



const User = ({ name, password, email,id,deleteUser}) => {
  
  return (
  
      

      <tr>
        <td>{name}</td>

        <td>{password}</td>

        <td>{email}</td>
        <td>{id}</td>
        <td><button type="button" class="delBtn" onClick={() => deleteUser(id)}>delete</button></td>
      </tr>
    
  );

};

export default User;