import React from "react";
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    state: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts state={props.state.postData}/>
    </div>
}

export default Profile;