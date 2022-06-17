import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

// type PostPropsType = {
//     store: StoreType
// }

/*const MyPostsContainer = () => {
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
};*/

const mapStateToProps=(state:AppStateType)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        changeNewTextCallback:(text:string)=>{
            let action = changeNewTextAC(text);
           dispatch(action);
        },
        addPost:()=>{
            dispatch(addPostAC());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;