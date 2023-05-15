import React from 'react';
import LikeDislikeFeature from '../LikeDislikeFeature.jsx/LikeDislikeFeature';
import "./PostList.css"

const PostList = (props) => {
  
  return (
    <div className='postlist-container'>
        {props.parentPosts.map((post, index) => (
          <div key={index} className='postlistbox'>
            <p>{post.username}</p>
            <p>{post.post}</p>
            <LikeDislikeFeature />
          </div>
        ))}
    </div>
  );
};

export default PostList;
