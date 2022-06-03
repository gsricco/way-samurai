import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";
import {ActionType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    // addPost:()=>void
    // changeNewTextCallback:(newText:string)=>void
}

/*const posts = [                                   //перенесли в index.tsx
    {id: 1, message: 'First post', likesCount: 11},
    {id: 2, message: 'Hello samurai', likesCount: 25},
    {id: 2, message: 'Dobro pzl', likesCount: 5},
    {id: 4, message: 'Pole dur', likesCount: 25},
]*/

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
            {/*<MyPosts posts={props.profilePage.posts} addPost={props.addPost} changeNewTextCallback={props.changeNewTextCallback} newPostText={props.profilePage.newPostText}/>*/}
        </div>
    )
}

export default Profile;