import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import Header from './Components/Header/Header';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const[posts, setPosts] = useState([{username: "TuckerCurtin", post: "Aint it beautiful out today?!"}])

  function addnewPost(post){
    let tempPosts =[...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <Header/>
      <CreatePost addNewPostProperty={addnewPost}/>
      <PostList parentPosts ={posts}/>
    </div>
  );
}

export default App;
