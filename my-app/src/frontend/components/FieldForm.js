import React, {useState,useEffect} from "react";
import validate from "./validateRules";

function useForm(initialState={},validations=[],onSubmit=()=>{},updateData=()=>{}){
    const{isValid:initialIsValid,errors:initialErrors} = validate(validations,initialState);
    const[errors,setErrors] = useState(initialErrors);
    const[values,setValues] = useState(initialState);
    const[isValid,setIsValid] = useState(initialIsValid);
    const[touched,setTouched] = useState({});

    const stateChangeHandler= event =>{
        console.log(event.target.name+": "+ event.target.value);
        const newValues = {
            ...values,
            [event.target.name] : event.target.value
        };
        // updateData(prev=>{
        //     return{
        //         ...prev,
        //         [event.target.name] : event.target.value  
        //     }

        // })
        const{isValid,errors} = validate(validations,newValues);
        setValues(newValues);
        setIsValid(isValid);
        setErrors(errors);
        setTouched({...touched,[event.target.name]:true});
    }

    const submitHandler = event => {
        event.preventDefault();
        onSubmit(values);
    }

    return {values,errors,isValid,touched,stateChangeHandler,submitHandler};
};

export default useForm;