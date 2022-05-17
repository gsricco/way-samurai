import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addPost, changeNewText} from "./redux/state";

export type MessagesType= {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
    avatar:string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type SideBarType = {
    id: number
    name: string
    avatar:string
}

export type ProfilePageType = {
    messageForNewPost:string
    posts: Array<PostsType>
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type SideBarPageType = {
    friends:Array<SideBarType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarPageType
}
type AppPropsType = {
    state:StateType
    addPost:(postMessage:string)=>void
    changeNewText:(newText:string)=>void
}


function App(props:AppPropsType) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar sideBar={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                   {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}

                    <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage}/>} />
                    <Route path='/profile' render={()=><Profile state={props.state.profilePage} addPost={props.addPost} changeNewTextCallback={props.changeNewText}/>}/>
                    <Route path='/news' render={()=><News />}/>
                    <Route path='/music' render={()=><Music />}/>
                    <Route path='/settings' render={()=><Settings />}/>


                </div>
            </div>

    );
}

export default App;
