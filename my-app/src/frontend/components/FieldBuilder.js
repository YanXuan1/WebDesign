import React, { useState, useRef } from 'react';
import './FieldBuilder.css';
import FieldService from '../../apis/MockService';
import Items from "./Items";
import Button from "./Button";
import useForm from "./FieldForm";
import useLocalStorage from "./useLocalStorage";
import 'bootstrap/dist/css/bootstrap.min.css';

function FieldBuilder(props){

    const state = FieldService.getField(0);

    // const [data, updateData] = useState({
    //     label:  state.label,
    //     required : state.required,
    //     defaultValue : state.choices[0],
    // });

    const [data, updateData] = useLocalStorage("data",{
        label:  state.label,
        required : state.required,
        defaultValue : state.choices[0],
    });

    
    const [choice,setChoices] =useState(state.choices);
    const [order,setOrder] = useState("Increase");
    const[validDefault,setValidDefault] = useState(false);
    const[validDefault2,setValidDefault2] = useState(false);

    // console.log(choice);
    function inputChangeHanlder(val){
        updateData(prev=>{
            return {
                ...prev,
                defaultValue: val
            }
        });
        setValidDefault2(false);
    }
    
    const[validLength,setValidLength] = useState(true);
    function removeHanlder(val){
        setChoices(
            prev=>{
                return prev.filter((item, index)=>{
                    return item !== val;
                })
            }
        )
        console.log(choice.length);
        setValidLength(choice.length > 50 ? false : true);
    }

    
    function stateChangeHandler2(event){
        const {name,value} = event.target;
        updateData(prev=>{
            return {
                ...prev,
                [name]: value
            }
        });
        if(value.length > 40){
            setValidDefault(true);
        }else{
            setValidDefault(false);
        }
        if(value.length === 0){
            setValidDefault2(true);
        }else{
            setValidDefault2(false);
        }
    }

    

    function setCheckbox(event){
        var isChecked = event.target.checked;
        updateData(prev=>{
            return {
                ...prev,
                 required: isChecked
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

   
    const {values,errors,isValid,touched,stateChangeHandler} = useForm(initialState,validations);

    

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
        // event.preventDefault();
    }
    
    // Return origin values
    function refresh(){
        window.location.reload(false);
    }


    //Submit
    const[validResult,setValidResult] = useState(true);
    function submit(event){
        event.preventDefault();
        var flag = false;
        for(var i = 0;i<choice.length;i++){
            if(choice[i] === data.defaultValue){
                flag = true;
                break;
            }
        }
        if(!validLength || choice.length > 50 || (!flag && choice.length===50)){
            setValidLength(false);
        }else{
            setValidLength(true);
        }
        if(!validDefault && !validDefault2 && validLength && isValid){
            if(!flag && data.defaultValue.length !== 0){
                setChoices([...choice,data.defaultValue]);
            }
            setValidResult(true);
            const res = {
                label: values.labelForMsg,
                type: data.required,
                DefaultValue: data.defaultValue
            };
            console.log(JSON.stringify(res));
            fetch("http://www.mocky.io/v2/566061f21200008e3aabd919", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(res),
            }).then(response => response.json())
            .then(data =>{
                console.log("data: " + data.status);
            });
        }else{
            setValidResult(false);
        }
        

    }


    

    
    return (
        <div className='fieldBuilder'>
            <h1>Field Builder</h1>
            <form>
                <label id='label'>Label</label>
                <input type="label" name="labelForMsg" defaultValue={data.label} ref={inputEl} onChange={stateChangeHandler} required></input>
                <button id="focus" type="button" onClick={maxLength}>The extra length</button><br/>
                {
                    touched.labelForMsg && errors.labelForMsg && <p className="error" style={{color: 'red'}}>{errors.labelForMsg}</p>
                }
                <label id='type'>Type</label>
                <label>Multi-select</label> 
                <label id="check"><input type="checkbox" name="multi-select" defaultChecked={data.required} onClick={setCheckbox}/>A Value is required</label><br/>
                <label id='defaultValue'>DefaultValue</label> 
                <input type="defaultValue" name="defaultValue" value={data.defaultValue} onChange={stateChangeHandler2} required></input><br/>
                {
                    validDefault && <p className="error" style={{color: 'red'}}>{"Should not more than 40 characters"}</p>
                }
                {
                    validDefault2 && <p className="error" style={{color: 'red'}}>{"Should not be null"}</p>
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
                {
                    !validLength && <p className="error" style={{color: 'red'}}>{"There should no more than 50 choices"}</p>
                }
                <label id='order'>Order</label>
                <select onChange={(e) => setOrder(e.target.value)}>
                    <option value="Increase" >Increase Order</option> 
                    <option value="Decrease" >Decrease Order</option>
                </select>
                {/* <button id="sure" type='button' onClick={sorts}>Sure</button><br/> */}
                <Button sort={sorts}>Sure</Button><br/>
                <button id="submit" type="button" onClick={submit} >Save</button>&nbsp;&nbsp;&nbsp;Or &nbsp;
                <button id="cancel" type="button" onClick={refresh}>Cancel</button> 
                {
                    !validResult && <p className="error" style={{color: 'red'}}>{"Cannot submit for some errors"}</p>
                }
            </form> 
        </div>
       
    )
    
};
  
export default FieldBuilder;