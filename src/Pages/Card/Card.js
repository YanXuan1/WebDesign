import React from 'react';
import './Card.css';

const Card=(props) =>{
    return (
        <div className='cardtotal'>
            <label>{props.text}</label>
        </div>
    );
}

export default Card;