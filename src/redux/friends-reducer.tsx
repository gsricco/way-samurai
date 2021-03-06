import React from 'react';
import {ActionType} from "./redux-store";
import {UserType} from "./users-reducer";

const SET_USERS = 'SN/FRIENDS/SET_USERS';
const SET_STATUS = 'SN/FRIENDS/SET_STATUS';
// const SET_ABOUT_ME = 'SN/FRIENDS/SET_ABOUT_ME';

type StatusesType = {
    NOT_INITIALIZED:string
    ERROR:string
    INPROGRESS:string
    SUCCESS:string
}
export const statuses:StatusesType = {
    NOT_INITIALIZED:'NOT_INITIALIZED',
    ERROR:'ERROR',
    INPROGRESS:'INPROGRESS',
    SUCCESS:'SUCCESS'
}

export type InitialStateType = {
    users: Array<UserType>
    status:string
    // aboutMe:string|null
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
    status:statuses.NOT_INITIALIZED,
    // aboutMe:null

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
        // case SET_ABOUT_ME:
        //     return {
        //         ...state,
        //         aboutMe: action.aboutMe
        //     }

        default:
            return state;
    }
}

export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setStatusFR = (status: string) => ({type: SET_STATUS, status} as const)
// export const setAboutMeFR = (aboutMe: string) => ({type: SET_ABOUT_ME, aboutMe} as const)






export default friendsReducer;