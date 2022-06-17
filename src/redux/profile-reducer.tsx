import React from 'react';
import {ActionType} from "./store";
import {PostsType, ProfilePageType} from "../App";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'First post', likesCount: 11},
        {id: 2, message: 'Hello samurai', likesCount: 25},
        {id: 2, message: 'Dobro pzl', likesCount: 5},
        {id: 4, message: 'Pole dur', likesCount: 25},
    ],
    newPostText: 'IT-text',
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts:[...state.posts,newPost],
                newPostText:''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText:action.newText
            };
        default:
            return state;
    };
}


export const addPostAC = () => ({type: ADD_POST} as const)
export const changeNewTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)

export default profileReducer;