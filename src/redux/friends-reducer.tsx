import React from 'react';
import {ActionType} from "./redux-store";
import {authAPI, userAPI} from "../api/api";
import {mapDispatchPropsType, UsersPropsType} from "../components/Users/UsersContainer";
import {Dispatch} from "redux";
import {setAuthUserData} from "./auth-reducer";
import {addPostAC, setUsersProfile} from "./profile-reducer";
import {UserType} from "./users-reducer";

const SET_USERS = 'SN/FRIENDS/SET_USERS';
const SET_STATUS = 'SN/FRIENDS/SET_STATUS';

type StatusesType = {
    NOT_INITIALIZED:string
    ERROR:string
    INPROGRESS:string
    SUCCESS:string
}
export const statuses = {
    NOT_INITIALIZED:'NOT_INITIALIZED',
    ERROR:'ERROR',
    INPROGRESS:'INPROGRESS',
    SUCCESS:'SUCCESS'
}

export type InitialStateType = {
    users: Array<UserType>
    status:string
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
    status:statuses.NOT_INITIALIZED,

};





const friendsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status:action.status
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        default:
            return state;
    }
}

export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)






export default friendsReducer;