import React from 'react';
import {ActionType} from "./redux-store";


const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
    id: number|null,
    email: string|null,
    login: string|null,
    isAuth:boolean
};

const initialState:InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
};




const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }


        default:
            return state;
    }
}


export const setAuthUserData = (userId: number,email:string,login:string) => ({type: SET_USER_DATA,data:{userId,email,login}} as const)


export default authReducer;