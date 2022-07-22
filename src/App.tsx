import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {ProfileType} from "./redux/profile-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Friends from "./components/Users/Friends";

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type SideBarType = {
    id: number
    name: string
    avatar: string
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
    profile: null | ProfileType
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}
export type SideBarPageType = {
    friends: Array<SideBarType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarPageType
}

function App() {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                {/*<Route path='/friends' render={() => <Friends />}/>*/}
            </div>
        </div>
    )
}

export default App;
