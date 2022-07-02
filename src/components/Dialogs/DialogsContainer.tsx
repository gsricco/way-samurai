import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps =(state:AppStateType)=>{
    return {
        dialogsPage:state.dialogsPage,
    }
}
let mapDispatchToProps =(dispatch:Dispatch)=>{
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageAC(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC());
            },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;