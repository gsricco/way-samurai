import React from 'react';
import {ActionType} from "./store";

export type UserType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullname: string,
    status: string,
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => (el.id === action.userId ? {...el, followed: true} : el))
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => (el.id === action.userId ? {...el, followed: false} : el))
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)

export default usersReducer;