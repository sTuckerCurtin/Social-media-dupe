import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import Header from './Components/Header/Header';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const[posts, setPosts] = useState([{username: "GB420", post: "I call upon all nations, to do everything they can, to stop these terrorist killers. Thank you... now watch this drive."}])

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


// inputs too close, text box input to go multi lines, add pic, add pics, maybe do top bottom like button 
// header needs to be bigger and wider, 
// feed page and a most liked page