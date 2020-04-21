import React from 'react';
import { Link } from 'react-router-dom'

const links = [ 
    {
        name: 'My account',
        linkTo: '/user/dashboard'
    },
    {
        name: 'User information',
        linkTo: '/user/user_profile'
    }
]

const UserLayout = (props) => {

    const generateLinks = (links) => {
        links.map((item,i)=> (
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        ))
    }

    return (
        <div className='container'>
            <div className='userContainer'>
                <div className='user_left_nav'>
                    My account
                    <div className='links'>
                        {generateLinks(links)}
                    </div>
                </div>
                <div className='userRight'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default UserLayout;