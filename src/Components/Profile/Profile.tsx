import React from "react";
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeNewText, ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:(postMessage:string)=>void
    message:string
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts state={props.profilePage.postData}
                 message={props.profilePage.messageForNewPost}
                 addPost={props.addPost}
                 changeNewTextCallback={changeNewText}
        />
    </div>
}

export default Profile;