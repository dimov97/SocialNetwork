import React from "react";
import m from './Post.module.css';

type postDataType = {
    message: string;
    likesCount: number;
}

const Post = (props:postDataType) => {
    return <div>
                <div className={m.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-BvDcUogUpbYMXo6ehrRbrU-2bnk7YisgA&usqp=CAU" alt="ava"/>
                    { props.message }
                    <div>
                        <span>like</span> { props.likesCount }
                    </div>
                </div>
    </div>
}

export default Post;