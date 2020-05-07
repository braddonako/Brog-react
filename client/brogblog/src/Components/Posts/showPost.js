// articlePosts

import React from 'react';

const showPost = (props) => {
    

    const clickedPost = props.onePost.map((onePost) => {
        console.log(onePost)
        console.log(onePost.title)
    })

    return (
        <div>
            {clickedPost}
        </div>
    );
};

export default showPost;