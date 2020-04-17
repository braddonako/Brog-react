import React from 'react';
import {Switch, Route } from 'react-router-dom';

import RegisterLogin from './Components/Register_login'
import Home from './Components/Home';
import Layout from './hoc/layout';
import About from './Components/About'

const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path='/register_login' exact component={ RegisterLogin }/>
        <Route path='/' exact component={ Home }/>
        <Route path='/about' exact component={About}/>>
      </Switch>
    </Layout>
    
  )
}

export default Routes;
