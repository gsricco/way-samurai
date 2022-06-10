import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

// type PostPropsType = {
//     store: StoreType
// }

const MyPostsContainer = () => {
    // const state = props.store.getState();

    // const onAddPost = () => {
    //     props.store.dispatch(addPostAC())
    // }
    // const newTextChangeHandler = (text: string) => {
    //     let action = changeNewTextAC(text);
    //     props.store.dispatch(action)
    // }
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState();
                const onAddPost = () => {
                    store.dispatch(addPostAC())
                }
                const newTextChangeHandler = (text: string) => {
                    let action = changeNewTextAC(text);
                    store.dispatch(action)
                }

              return   (
                    <MyPosts changeNewTextCallback={newTextChangeHandler}
                             addPost={onAddPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>

                // posts={state.profilePage.posts}
                //              newPostText={state.profilePage.newPostText}/>)
                //
            )
            }
        }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;