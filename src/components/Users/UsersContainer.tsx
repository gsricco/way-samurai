import React from 'react';

import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    users: Array<UserType>
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);