import React, {useState} from 'react';
import "./Button.css";

function Button(props){
    function sorts(event){
        alert("Loading...");
        props.sort(props.item);
        event.preventDefault();
    }
    return(
        <button id="sure" type='button' onClick={sorts}>Submit</button>
    );
};

export default Button;