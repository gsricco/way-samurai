import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer, {addPostAC, changeNewTextAC, setStatus, setUsersProfile} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageAC} from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer, {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingProgress,
    toggleIsFetchingAC,
    unfollowAC
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import friendsReducer, {setAboutMeFR, setStatusFR, setUsers} from "./friends-reducer";

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setStatusFR>
    | ReturnType<typeof setAboutMeFR>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    friends: friendsReducer


});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

