import React from 'react';
import LikeDislikeFeature from '../LikeDislikeFeature.jsx/LikeDislikeFeature';
import "./PostList.css"

const PostList = (props) => {
  
  return (
    <div className='postlist-container'>
        {props.parentPosts.map((post, index) => (
          <div key={index} className='postlistbox'>
            <p className='usernameDisplay'><b>{post.username}</b></p>
            <p className='postListPost'>{post.post}</p>
            <div>< LikeDislikeFeature /></div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
