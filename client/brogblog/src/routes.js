import React from 'react';
import {Switch, Route } from 'react-router-dom';

import RegisterLogin from './Components/Register_login'
import Home from './Components/Home';
import Layout from './hoc/layout';
import Auth from './hoc/auth'
import About from './Components/About';
import Register from  './Components/Register_login/register';
import AllPosts from './Components/Posts';
import AddPost from './Components/User/Admin/add_post'

import UserDashboard from './Components/User'

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path='/user/dashboard' exact component={ Auth(UserDashboard, true) }/>
        <Route path='/admin/add_post' exact component={ Auth(AddPost, true) }/>

        <Route path='/register_login' exact component={ Auth(RegisterLogin, false) }/>
        <Route path='/register' exact component={ Auth(Register, false) }/>
        <Route path='/' exact component={ Auth(Home, null) }/>
        <Route path='/about' exact component={Auth(About, null)}/>
        <Route path='/posts' exact component={Auth (AllPosts, null)} />>
      </Switch>
    </Layout>
    
  )
}

export default Routes;
