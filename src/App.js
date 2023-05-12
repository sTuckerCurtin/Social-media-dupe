import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';

function App() {

  const[posts, setPosts] = useState([{user: "TuckerCurtin", submission: "Aint it beautiful out today?!"}])

  return (
    <div>
      <PostList parentPosts ={posts}/>
    </div>
  );
}

export default App;
