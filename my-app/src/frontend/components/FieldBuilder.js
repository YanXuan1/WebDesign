import React, { useState } from 'react';
import './FieldBuilder.css';
import FieldService from '../../apis/MockService';
import {Table} from "antd";
import Items from "./Items";

function FieldBuilder(props){

    const state = FieldService.getField(0);
    console.log(state);
    const [data, updateData] = useState({
        label: state.label,
        required : state.required,
        defaultValue : state.choices[0],
    });
    const [choice,setChoices] =useState(state.choices);

    function inputChangeHanlder(text){
        updateData(prev=>{
            return {
                ...prev,
                defaultValue: text
            }
        });
    }


    function removeHanlder(val){
        setChoices(
            prev=>{
                return prev.filter((item, index)=>{
                    return item !== val;
                })
            }
        )
    }

        function stateChangeHandler(event){
            const {name,value} = event.target;
            updateData(prev=>{
                return {
                    ...prev,
                    [name]: value
                }
            });
        }
        return (
            <div> 
               
            <form>
            <label>Label</label> 
           <input id="label" defaultValue={data.label}></input><br/>
            <label>Type</label>
            <label>Multi-select</label> 
            <label><input type="checkbox" name="multi-select" value="true" defaultChecked={data.required}/>A Value is required</label><br/>
            <label>DefaultValue</label> 
           <input id="default" name="defaultValue" type="text" value = {data.defaultValue} onChange={stateChangeHandler}></input><br/>
           <label>Choices</label> <br/> 
           <table className='myTable'>
               <tbody id='myTableBody'>
                {
                    choice.map((item,key)=>{
                        return(
                           <Items item={item} inp={inputChangeHanlder} remove={removeHanlder} key={key}></Items>
                        )
                    })
                }
                </tbody>
                </table>
               <br/>
           <label>Order
               <select>
                   <option value="A">A</option> 
                   <option value="B">B</option>
                   <option value="C">C</option>
               </select>
           </label> 
           <br/>
             <button type="button" >Save</button> 
             <button type="button" >concel</button> 
            </form> 
            </div>
       
        )
    
  };
  
export default FieldBuilder;