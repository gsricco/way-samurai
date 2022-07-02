import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";



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