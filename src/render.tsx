import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App, {StateType} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewText} from "./redux/state";


export let rerenderEntireTree = (state:StateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewText={changeNewText}/>
        </BrowserRouter>, document.getElementById('root'));
}


