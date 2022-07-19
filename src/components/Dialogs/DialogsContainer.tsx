import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {DialogsPageType} from "../../App";

type mapStateToPropsType={
    dialogsPage:DialogsPageType
}
type mapDispatchToPropsType={
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}

let mapStateToProps =(state:AppStateType):mapStateToPropsType=>{
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

let AuthRedirectComponent = withAuthRedirect<mapStateToPropsType & mapDispatchToPropsType>(Dialogs);


// let AuthRedirectComponent = (props:DialogsPropsType)=>{
//     if(!this.props.isAuth) return <Redirect to={'/login'}/>
//
//     return <Dialogs {...props} />
// }


const DialogsContainer = connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;