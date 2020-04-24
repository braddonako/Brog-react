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

    
    
    render() {
            const getLastPost = this.state.articlePosts.map((articlePosts, i) => {
                // console.log(articlePosts._id)
                // now I need to return the form below, then I can render it again.. 
                const showMore = () => {
                    // console.log(articleId, "articleid")
                    Axios.get('/api/articles/show_by_id?id=' + articlePosts._id)
                        .then(response => {
                            console.log(response)
                            if (response){
                                setTimeout(() => {
                                        this.props.history.push('/articles/show_by_id?id=' + articlePosts._id)
                                }, 1000);
                            }
                        })
                        return(
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
                                </div>
                        )
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
                </div>
            );
        })
        return(
            <div>
                <div>
                    <h1 className='welcome'>All BROG Posts</h1>
                    <p className='welcomeSub'>All about Coding Bootcamps && JavaScript </p>
                </div>
                {getLastPost}
            </div>
            
        )
    }
}

export default AllPosts;