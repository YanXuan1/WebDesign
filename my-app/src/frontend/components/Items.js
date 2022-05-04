import React,{useState} from 'react';

function Items(props){
    //alert(props.key);
    function inputValue(event){
        props.inp(props.item);
        event.preventDefault();
    }
    function removeValue(event){
        props.remove(props.item);
        event.preventDefault();
    }
    return (
        
        <tr>
            <th>{props.item}</th>
            <td><button type='button' onClick={inputValue}>Choose</button></td>
            <td><button type='button' onClick={removeValue}>Delete</button></td>
        </tr>
    );
}

export default Items;