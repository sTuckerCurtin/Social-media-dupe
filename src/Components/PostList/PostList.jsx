
const PostList = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.parentPosts.map((post, index) =>{
            return (
            <tr>
                <td>{post.user}</td>
                <td>{post.submission}</td>
            </tr>
                );
            })}
            </tbody>
      </table>
     );
}
 
export default PostList;