import React from "react";
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:(postMessage:string)=>void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts state={props.profilePage.postData}
                 addPost={props.addPost}/>
    </div>
}

export default Profile;