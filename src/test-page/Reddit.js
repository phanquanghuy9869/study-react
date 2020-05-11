import React from 'react';
import axios from 'axios';

const Reddit = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`).then(
            res => {
                console.log('res: ', res.data.data.children.map(obj => obj.data));
                setPosts(res.data.data.children.map(obj => obj.data));        
            }
        )
    }, []);

    return (
        <div>
            <h2>/r/reactjs</h2>
            <ul>
                {posts.map(
                    post => (<li key={post.id} > {post.title} - {post.score} - </li>)
                )}
            </ul>
        </div>
    )
}

export default Reddit;