import React from "react";
import m from './Post.module.css';

type MessageType = {
    message: string;
}

const Post = (props:MessageType) => {
    return <div>
                <div className={m.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-BvDcUogUpbYMXo6ehrRbrU-2bnk7YisgA&usqp=CAU" alt="ava"/>
                    { props.message }
                    <div>
                        <span>like</span>
                    </div>
                </div>
    </div>
}

export default Post;