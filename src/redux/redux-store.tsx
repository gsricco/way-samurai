import {combineReducers, legacy_createStore} from "redux";
import profileReducer, {addPostAC, changeNewTextAC, setUsersProfile} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageAC} from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer, {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";


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

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersPage:usersReducer,
    auth:authReducer

});

export type AppStateType = ReturnType<typeof rootReducer>

export let store=legacy_createStore(rootReducer);
//@ts-ignore
window.store = store;

