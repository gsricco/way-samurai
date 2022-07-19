import React from 'react';
import {ActionType} from "./redux-store";
import {authAPI, userAPI} from "../api/api";
import {mapDispatchPropsType, UsersPropsType} from "../components/Users/UsersContainer";
import {Dispatch} from "redux";
import {setAuthUserData} from "./auth-reducer";
import {setUsersProfile} from "./profile-reducer";


export type UserType = {
    id: number,
    photos: {
        "small": string | null,
        "large": string | null
    },
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
}


export type InitialStateType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
    pagesSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


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
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
} as const)


export const getUsersThunkCreator = (currentPage: number, pagesSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetchingAC(true));

        userAPI.getUsers(currentPage, pagesSize).then(data => {

            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setUsersTotalCountAC(data.totalCount));
            dispatch(setCurrentPageAC(currentPage))
        });
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));


        userAPI.follow(userId)
            .then(data => { //response.data  -> { resultCode, data, message }
                if (data.resultCode == 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));


        userAPI.unfollow(userId)
            .then(data => { //response.data  -> { resultCode, data, message }
                if (data.resultCode == 0) {
                    dispatch(unfollowAC(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

// export const setAuthUserDataThunkCreator = () => {
//     return (dispatch: Dispatch) => {
//         authAPI.me()
//             .then(response => {
//                     if (response.data.resultCode === 0) {
//                         let {id, login, email} = response.data.data;
//                         dispatch(setAuthUserData(id, email, login))
//                         // console.log(id,email,login)
//                     }
//                 });
//     }
// }

// export const setUsersProfileThunkCreator = (userId: number) => {
//     return (dispatch: Dispatch) => {
//         userAPI.setUsersProfile(userId)
//             .then(response => {
//                         dispatch(setUsersProfile(response.data));
//                     });
//     }
// }


export default usersReducer;