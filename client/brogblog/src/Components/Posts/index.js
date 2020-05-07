import React, { Component } from 'react';
import Axios from 'axios';
// import { connect } from 'http2';

class AllPosts extends Component {

    constructor(){
        super();
        this.state= {
            articlePosts:[]
        }
    }

    componentDidMount(){
        this.getAllArticles();
    }

    getAllArticles = () =>{
        // we are fetching the show all blog posts here through axios -- Only admins can access this post 
        Axios.get('/api/articles/show').then(response => {
            // console.log(response)
            this.setState({
                articlePosts: response.data
            })
        })
    }

    // show one more post -- this will be very similar to how I did add a post... Should be easy to do, just need to grab it by it's id
    // create a function that will request the post by its id
    // create an initial state up top with each field I am looking for 
          
    
    render() {
            const showAllPosts = this.state.articlePosts.map((articlePosts, i) => {
                // console.log(articlePosts._id)
                // now I need to return the form below, then I can render it again.. 
                const showMore = () => {
                    // console.log(articleId, "articleid")

                    // might throw this in redux, so I can grab the state at any page. I really have no fuckin idea what is going on, so I am going to take a break. night night
                    Axios.get('/api/articles/show_by_id?id=' + articlePosts._id)
                        .then(response => {
                            console.log(response)
                            if (response){
                                setTimeout(() => {
                                        this.props.history.push('/posts/show_by_id?id=' + articlePosts._id)
                                }, 1000);
                            }
                        })
            }
                
            return (
                <div className = 'page_wrapper'
                key = {i}>
                    <div className='container'>
                        <div className='homeContainer'>
                            <div>
                                <h1 className='postTitle'>{articlePosts.title}</h1>
                                <p className='postBody'>
                                    {articlePosts.body}
                                </p> 
                                <button className='buttonPost' id={articlePosts._id} type='button' onClick={(event)=> showMore(event)}>
                                        Click to see comments 
                                </button>            
                            </div>
                            <div className='datePosted'>
                                Date Posted: {articlePosts.date}
                            </div>
                            </div>
                    </div>
                </div> );
        })
        return(
            <div>
                <div>
                    <h1 className='welcome'>All BROG Posts</h1>
                    <p className='welcomeSub'>All about Coding Bootcamps && JavaScript </p>
                </div>
                {showAllPosts}
            </div>
            
        )
    }
}

export default AllPosts;