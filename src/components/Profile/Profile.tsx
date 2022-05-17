import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    state: ProfilePageType
    addPost:(postMessage:string)=>void
    changeNewTextCallback:(newText:string)=>void
}

/*const posts = [                                   //перенесли в index.tsx
    {id: 1, message: 'First post', likesCount: 11},
    {id: 2, message: 'Hello samurai', likesCount: 25},
    {id: 2, message: 'Dobro pzl', likesCount: 5},
    {id: 4, message: 'Pole durakov', likesCount: 25},
]*/

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} changeNewTextCallback={props.changeNewTextCallback} message={props.state.messageForNewPost}/>
        </div>
    )
}

export default Profile;