import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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
type AppPropsType = {
    store: StoreType
    // state:StateType
    // addPost:()=>void
    // changeNewText:(newText:string)=>void
}


function App(props: AppPropsType) {
    const state = props.store.getState();

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={state.sideBar}/>
            <div className='app-wrapper-content'>
                {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}

                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>

                <Route path='/profile' render={() => <Profile store={props.store}/>}/>

                {/*<Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>

                <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                              dispatch={props.store.dispatch.bind(props.store)}
                />}/>*/}
                {/*<Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                              addPost={props.store.addPost.bind(props.store)}
                                                              changeNewTextCallback={props.store.changeNewText.bind(props.store)}/>}/>*/}
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>


            </div>
        </div>

    );
}

export default App;
