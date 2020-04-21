import React from 'react';
import UserLayout from '../../hoc/user';
import MyButton from '../utils/button';

const UserDashboard = () => {
    return (

        <UserLayout>
            <div className='user-nfo-panel'>
                 <h1>User Information</h1>
                 <div>
                     <span>Name</span>
                     <span>Last Name</span>
                     <span>Email</span>
                 </div>
                 <MyButton
                    type='default'
                    title='Edit account info'
                    linkTo='user/user_profile'
                 />
            </div>
        </UserLayout>
        
    );
};

export default UserDashboard;