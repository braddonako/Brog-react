import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/user_actions';

class Header extends Component {

    state = {
        page:[
            {
                name:'Home',
                linkTo:'/',
                public: true
            },
            {
                name:'Posts',
                linkTo:'/posts',
                public: true
            },
            {
                name: 'About',
                linkTo: '/about',
                public: true
            }
        ],
        user:[
            {
                name:'My Account',
                linkTo:'/user/dashboard',
                public: false
            },
            {
                name:'Log in',
                linkTo:'/register_login',
                public: true
            },
            {
                name:'Log out',
                linkTo:'/user/logout',
                public: false
            },
        ]
    }

    logoutHandler = () =>{
        this.props.dispatch(logoutUser()).then(response => {
            if(response.payload.success){
                this.props.history.push('/')
            }
        })
    }


    defaultLink = (item,i) => (
        item.name === 'Log out' ?
            <div className="log_out_link"
                key={i}
                onClick={()=> this.logoutHandler()}
            >
                {item.name}
            </div>

        :
        <Link to={item.linkTo} key={i}>
            {item.name}
        </Link>
    )


    showLinks = (type) =>{
        let list = [];

        if(this.props.user.userData){
            type.forEach((item)=>{
                if(!this.props.user.userData.isAuth){
                    if(item.public === true){
                        list.push(item)
                    }
                } else{
                    if(item.name !== 'Log in'){
                        list.push(item)
                    }
                }
            });
        }

        return list.map((item,i)=>{
                return this.defaultLink(item,i)          
        })
    }


    render() {
        return (
            <header>
                <div className="container">
                     <div className="left">
                         <div className="logo">
                             the BROG
                         </div>
                         <div className='header_logo_title'>AKA Brads Blog</div>                     
                     </div>
                     <div className="right">
                         <div className="top">
                             {this.showLinks(this.state.user)}
                         </div>
                         <div className="bottom">
                             {this.showLinks(this.state.page)}
                         </div>
                     </div>
               </div>
            </header>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Header));