import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string,
    likeCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
                alt=""/>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.like}>
                <span>like:</span>
                <div>
                    {props.likeCount}
                </div>
            </div>
        </div>
    )
}

export default Post;