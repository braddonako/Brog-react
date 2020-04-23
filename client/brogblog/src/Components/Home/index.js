import React, { Component } from 'react';
import Axios from 'axios';

class Home extends Component {

    constructor(){
        super();
        this.state= {
            mostRecentPost:[]
        }
    }

    componentDidMount(){
        this.getAllArticles();
    }

    getAllArticles = () =>{
        // We are fetching the most recent post here to display it on the home page
        Axios.get('/api/articles/showMostRecent').then(response => {
            // console.log(response)
            this.setState({
                mostRecentPost: response.data
            })
        })
    }
    
    render() {
        return(
            <div>
                <div>
                    <h1 className='welcome'>Welcome to da BROG</h1>
                    <p className='welcomeSub'>All about Coding Bootcamps && JavaScript </p>
                </div>
                <div className = 'page_wrapper_home'
                key = {this.state.mostRecentPost._id }>
                    <div className='container'>
                        <div className='homeContainer'>
                            
                            <div>
                                <h1 className='postTitle'>{this.state.mostRecentPost.title}</h1>
                                <p className='postBody'>
                                    {this.state.mostRecentPost.body}
                                </p>
                                <button className='buttonPost'  type='button' onClick={(event)=> this.submitForm(event)}>
                                        Click to see comments
                                </button>
                                
                            </div>
                            <div className='datePosted'>
                                Date Posted: {this.state.mostRecentPost.date}
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;