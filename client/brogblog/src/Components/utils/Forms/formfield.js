import React from 'react';

const FormField = ({formdata, change, id}) => {

    const renderTemplate = () => {
        let formTemplate = null;
        
        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div className='formBlock'>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(e)=> change({e, id, blur:true})}
                            onChange={(e) => change(e, id)}
                        />
                    </div>
                )
            break;
            default: 
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;