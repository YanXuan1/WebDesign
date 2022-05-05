import React, { useState, useRef } from 'react';
import './FieldBuilder.css';
import FieldService from '../../apis/MockService';
import Items from "./Items";
import useForm from "./FieldForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function FieldBuilder(props){

    const state = FieldService.getField(0);
    
    const [data, updateData] = useState({
        label: state.label,
        required : state.required,
        defaultValue : state.choices[0],
        value : state.choices[0]
    });
    const [choice,setChoices] =useState(state.choices);
    const [order,setOrder] = useState("Increase");

    // console.log(choice);
    function inputChangeHanlder(val){
        updateData(prev=>{
            return {
                ...prev,
                defaultValue: val
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

    function stateChangeHandler2(event){
        const {name,value} = event.target;
        updateData(prev=>{
            return {
                ...prev,
                [name]: value
            }
        });
    }

    //Validations
    function isRequired(value){
        return value != null && value.trim().length>0;
    }

    function isAcceptable(value){
        return isRequired(value) && value.trim().length <= 40;
    }

    const initialState = {
        labelForMsg : state.label,
        defaultValueForMsg : state.choices[0]
    };

    const validations = [
        ({labelForMsg}) => isAcceptable(labelForMsg) || {labelForMsg:'Label is required and should not more than 40 characters'},
        ({defaultValueForMsg}) => isRequired(defaultValueForMsg) || {defaultValueForMsg:'Default value is required'}
    ];

   
    const {values,errors,isValid,touched,stateChangeHandler,submitHandler} = useForm(initialState,validations,props,props);

    console.log(values.defaultValueForMsg);
    //HandelExtraLength
    const inputEl = useRef(null);

    function maxLength () {
        inputEl.current.value = values.labelForMsg;
        inputEl.current.setSelectionRange(10,999);
        inputEl.current.focus();
    }


    //get Increase or Decrease
    function sorts(event){
        var currentChoice = choice;
        currentChoice.sort((a,b) => {
            if(a<b){
                return order === "Increase" ? -1 : 1;
            }
            if(a>b){
                return order === "Decrease" ? -1 : 1;
            }
            return 0;
        });
        setChoices([...currentChoice]);
        event.preventDefault();

    }
    
    // console.log(order);
    

    
    return (
        <div className='fieldBuilder'>
            <h1>Field Builder</h1>
            <form onSubmit={submitHandler}>
                <label id='label'>Label</label>
                <input type="label" name="labelForMsg" defaultValue={data.label} ref={inputEl} onChange={stateChangeHandler} required></input>
                <button id="focus" type="button" onClick={maxLength}>The extra length</button><br/>
                {
                    touched.labelForMsg && errors.labelForMsg && <p className="error" style={{color: 'red'}}>{errors.labelForMsg}</p>
                }
                <label id='type'>Type</label>
                <label>Multi-select</label> 
                <label id="check"><input type="checkbox" name="multi-select" value="true" defaultChecked={data.required}/>A Value is required</label><br/>
                <label id='defaultValue'>DefaultValue</label> 
                <input type="defaultValue" name="defaultValue" value={data.defaultValue} onChange={stateChangeHandler2} required></input><br/>
                {
                    touched.defaultValueForMsg && errors.defaultValueForMsg && <p className="error" style={{color: 'red'}}>{errors.defaultValueForMsg}</p>
                }
                <label id='choices'>Choices</label>
                <div className="tableDiv">
                <table id="myTable" className="table" >
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
                </div>
                <br/>
                <label id='order'>Order</label>
                <select onChange={(e) => setOrder(e.target.value)}>
                    <option value="Increase" >Increase Order</option> 
                    <option value="Decrease" >Decrease Order</option>
                </select>
                <button id="sure" type='button' onClick={sorts}>Sure</button><br/>
                <button id="submit" type="button" >Save</button>&nbsp;&nbsp;&nbsp;Or &nbsp;
                <button id="cancel" type="button" >Cancel</button> 
            </form> 
        </div>
       
    )
    
};
  
export default FieldBuilder;