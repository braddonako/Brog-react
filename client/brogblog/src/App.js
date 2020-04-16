import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios.get('/api/articles/new').then(response=>{
      console.log(response)
    })
  }

  render(){
    return (
       <div className="App">
          MY APP A HAHAHAHAH
        </div>
      )};
}

export default App;
