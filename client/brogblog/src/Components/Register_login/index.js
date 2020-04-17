import React from 'react';
import MyButton from '../utils/button'

const RegisterLogin = () => {
    return (
        <div className='page_wrapper'>
            <div className='container'>
                <div className='register_login_container'>
                    <div className='left'>
                        <h1>New Users</h1>
                        <p>Welcome to the Brog! If you haven't signed up yet, here is your chance. By creating an account, you will be able to comment on posts, engage with other users about topics, and eventually, have the option to sign up for daily or weekly posts!</p>
                        <MyButton
                        type='default'
                        title='Create an account'
                        linkTo='/register'
                        addStyles={{
                            margin:'10px 0 0 0'
                        }}
                        />
                    </div>
                    <div className='right'>
                        <h1>Sign in</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLogin;