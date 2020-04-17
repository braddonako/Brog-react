

export const validate = (element, formdata = []) =>{
    let error = [true, ''];

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : ''}`
        error = !valid ? [valid, message] : error;
    }

    return error;
}


export const update = (element, formdata, formName) =>{
    const newFormData = {
        ...formdata
    }
    const newElement = {
        ...newFormData[element.id]
    }

    newElement.value = element.event.target.value;

    if(element.blur){
        let validData = validate(newElement, formdata);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newElement.touched = element.blur
        newFormData[element.id] = newElement;

        return newFormData;
    }

}