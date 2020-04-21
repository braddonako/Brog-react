import React, { Component } from 'react';
import FormField from '../utils/Forms/formfield';
import { update, generateData, isFormValid } from '../utils/Forms/formActions';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';

class Register extends Component {

    state = {
        formError: false,
        formSuccess:'',
        formdata:{
             name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'First Name'
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Last Name'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }, 
            confirmPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: 'Confirm password'
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'register');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'register');
        let formIsValid = isFormValid(this.state.formdata,'register')

        if(formIsValid){
            console.log(dataToSubmit)
            } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <div className='page_wrapper'>
                <div className='container'>
                    <div className='register_login_container'>
                        <div className='left'>
                            <form onSubmit={(event) => this.submitForm(event)}>
                                <h2>Personal Information</h2>
                                <div className='form_block_two'> 
                                    <div className='block'>
                                        <FormField
                                            id={'name'}
                                            formdata={this.state.formdata.name}
                                            change={(element)=> this.updateForm(element)}
                                        />                                      
                                    </div>
                                    <div className='block'>
                                        <FormField
                                            id={'lastname'}
                                            formdata={this.state.formdata.lastname}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField
                                        id={'email'}
                                        formdata={this.state.formdata.email}
                                        change={(element)=> this.updateForm(element)}
                                    />            
                                </div>
                                <h2>Veryify Password</h2>
                                  <div className='form_block_two'> 
                                    <div className='block'>
                                        <FormField
                                            id={'password'}
                                            formdata={this.state.formdata.password}
                                            change={(element)=> this.updateForm(element)}
                                        />                                      
                                    </div>
                                    <div className='block'>
                                        <FormField
                                            id={'confirmPassword'}
                                            formdata={this.state.formdata.confirmPassword}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    { this.state.formError ?
                                        <div className="error_label">
                                         Something went wrong, Please try again
                                        </div>
                                    :null}
                                    <button type='button' onClick={(event)=> this.submitForm(event)}>
                                        Create an account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Register);