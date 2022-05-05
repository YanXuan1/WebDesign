function validateInputs(validations, values){
    // let errors = {};
    // if(!props.label){
    //     errors.label = "Label is required!";
    // }else if(!/\s\S+|S+\s|\S\s*$/.test(props.label)){
    //     errors.label = "Invalid input";
    // }
    // if(!props.defaultValue){
    //     errors.defaultValue = "Default value is required!";
    // }else if(props.defaultValue.length > 40){
    //     errors.defaultValue = "There should not be more than 40 characters";
    // }
    // return errors;
    const errors = validations.map(validation => validation(values)).filter(validation => typeof validation === 'object');
    return {isValid: errors.length === 0, errors: errors.reduce((errors, error) => ({...errors, ...error}), {})};
};

export default validateInputs;