import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';

import FormField from '../../utils/Forms/formfield';
import { update, generateData, isFormValid } from '../../utils/Forms/formActions';

import {connect} from 'react-redux';
import {addPost} from '../../../actions/post_actions'

class AddPost extends Component {

    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            title: {
                element: 'input',
                value: '',
                config: {
                    label: 'Title of your post',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Title'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            body: {
                element: 'textarea',
                value: '',
                config: {
                    label: 'Content of the POST',
                    name: 'body_input',
                    type: 'text',
                    placeholder: 'Body'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            image: {
                element: 'input',
                value: '',
                config: {
                    name: 'image_input',
                    type: 'text',
                    placeholder: 'image URL'
                },
                validation: {
                    required: false,
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            },
            date: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'date'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLabel: true
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'posts');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }
    
    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'posts');
        let formIsValid = isFormValid(this.state.formdata,'posts')

        if(formIsValid){
            this.props.dispatch(addPost(dataToSubmit))
            .then(response => {
                if (response.payload.success){
                    this.setState({
                        formError: false,
                        formSuccess: true
                    });
                    setTimeout(() => {
                            this.props.history.push('/')
                    }, 2000);
                } else{
                    this.setState({formError: true})
            }
        })
    }
}

    render() {
        return (
            <UserLayout>
                <div>
                   <div>
                       <h1>Add new Post</h1>
                       <form onSubmit={(event)=> this.submitForm(event)}>
                        <FormField
                            id={'title'}
                            formdata={this.state.formdata.title}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'body'}
                            formdata={this.state.formdata.body}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'image'}
                            formdata={this.state.formdata.image}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'date'}
                            formdata={this.state.formdata.date}
                            change={(element)=> this.updateForm(element)}
                        />
                        <button type='button' onClick={(event)=> this.submitForm(event)}>
                                Submit a new post
                        </button>
                       </form>
                   </div>
                </div>
            </UserLayout>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        article: state.article
    }
}

export default connect(mapStateToProps)(AddPost);