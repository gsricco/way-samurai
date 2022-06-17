import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
            <Header/>
            {/*<Navbar sideBar={state.sideBar}/>*/}
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

                <Route path='/users' render={() => <UsersContainer/>}/>

            </div>
        </div>
    )
}

export default App;
