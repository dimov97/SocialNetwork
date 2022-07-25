import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className="content">
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5t_Zh-YU2u2wa5ZH2ynpNv-Va9QeeXNwJGw&usqp=CAU" alt="content"/>
        </div>
        <div>ava + description</div>
        <MyPosts />
    </div>
}

export default Profile;