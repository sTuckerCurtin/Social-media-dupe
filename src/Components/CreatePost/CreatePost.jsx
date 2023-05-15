import React, { useState } from 'react';
import "./CreatePost.css"



const CreatePost = (props) => {

    const [username, setUsername] = useState("")
    const [post, setPost] = useState("")


    function handleSubmit(event){
        event.preventDefault();
        let newPost ={
            username: username,
            post: post
        };
        props.addNewPostProperty(newPost);
        setUsername("")
        setPost("")

        



        
    }



    return ( 
        <form onSubmit={handleSubmit} className='createPostBox'>
            <div className='usernamebox'>
            <label className='usernamePosition'><h3>Username</h3></label>
            <input className='usernameinputBox' type="string" value={username} onChange={(event) => setUsername((event.target.value))}/>
            </div>
            <div className='postbox'>
            <label><h3>Post</h3></label>
            <input className='postinput' type="string" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button className='postbutton' type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePost;