import React from 'react';
import {ActionType} from "./redux-store";


export type UserType = {
    id: number,
    photos: {
        "small": string|null,
        "large": string|null
    },
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: Array<UserType>
    pagesSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
    pagesSize:10,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false

};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:{
            return{
                ...state, currentPage:action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount:action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching:action.isFetching}
        }

        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount} as const)
export const toggleIsFetchingAC = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export default usersReducer;