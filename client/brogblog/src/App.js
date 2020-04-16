import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios.get('/api/articles/show').then(response=>{
      console.log(response);
    })
  }

  render(){
    return (
       <div className="App">
         <h1>BROG</h1> 
        </div>
    )};
}

export default App;
