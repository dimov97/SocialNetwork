import React from "react";
import m from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return <div>
        <div>my posts
            <div>new post</div>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={m.posts}>
                <Post message="hi, how are you ?" likesCount="32"/>
                <Post message="this is my first post" likesCount="12"/>
            </div>
        </div>
    </div>
}

export default MyPosts;