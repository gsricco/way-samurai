import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type PostPropsType = {
    store: StoreType
}

const MyPostsContainer = (props: PostPropsType) => {
    const state = props.store.getState();

    const onAddPost = () => {
        props.store.dispatch(addPostAC())
    }
    const newTextChangeHandler = (text: string) => {
        let action = changeNewTextAC(text);
        props.store.dispatch(action)
    }
    return (
        <MyPosts changeNewTextCallback={newTextChangeHandler}
                 addPost={onAddPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;