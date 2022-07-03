import React from 'react';
import {PostsType, ProfilePageType} from "../App";
import {ActionType} from "./redux-store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE'

export type ContactType ={
    facebook: string|null,
    website: string|null,
    vk: string|null
    twitter: string|null
    instagram: string|null
    youtube: string|null,
    github: string|null
    mainLink: string|null
}
export type PhotosType={
    small: string|null
    large: string|null
}

export type ProfileType ={
    aboutMe: string
    contact: ContactType
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string,
    userId: number,
    photos: PhotosType

}


let initialState = {
    posts: [
        {id: 1, message: 'First post', likesCount: 11},
        {id: 2, message: 'Hello samurai', likesCount: 25},
        {id: 2, message: 'Dobro pzl', likesCount: 5},
        {id: 4, message: 'Pole dur', likesCount: 25},
    ],
    newPostText: 'IT-text',
    profile:null as null | ProfileType
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
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
        case SET_USER_PROFILE:{
            return {...state,profile:action.profile}
        }

        default:
            return state;
    }
}


export const addPostAC = () => ({type: ADD_POST} as const)
export const setUsersProfile = (profile:ProfileType) => ({type: SET_USER_PROFILE,profile} as const)
export const changeNewTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)

export default profileReducer;