import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className='page_wrapper'>
                <div className='container'>
                    <div>
                        <h1 class='welcome'>Welcome to da BROG</h1>
                        <p class='welcomeSub'>All about Coding Bootcamps && JavaScript </p>
                    </div>
                    <div className='homeContainer'>
                        <div>
                            <h1 className='postTitle'>Most recent BROG title</h1>
                            <p className='postBody'>Here is some text just to fuckin put something in here. Soon we will connect to the DB to auto populate so my most recent post is always featured -- fill figure this out at somepoint lol. These are the fields we need tho</p>
                        </div>
                        <div className='datePosted'>
                            Date Posted: 4/18/2020
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;