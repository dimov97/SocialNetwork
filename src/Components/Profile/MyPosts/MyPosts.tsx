import React from "react";
import m from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataType, ProfilePageType} from "../../../Redux/State";

type MyPostsPropsType = {
   state: PostDataType[]
}

const MyPosts = (props:MyPostsPropsType) => {
    /*let postData = [
        {id: 1, message: 'hi, how are you ?', likesCount: 32},
        {id: 2, message: 'this is my first post', likesCount: 12}
    ]*/

    let postsElements = props.state.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
    return <div className={m.postsBlock}>
        <h3>my posts</h3>
            <div>new post</div>
            <div>
                <div><textarea></textarea></div>
                <div><button>add post</button></div>
            </div>
            <div className={m.posts}>
                { postsElements }
            </div>
        </div>
}

export default MyPosts;