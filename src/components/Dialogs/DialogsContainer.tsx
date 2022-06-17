import React from 'react';
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

// type DialogsPropsType = {
//     store: StoreType
// }

/*export const DialogsContainer = () => {
    // const state = props.store.getState().dialogsPage;
    //
    // const onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageAC())
    // }
    //
    // const onNewMessageChange = (body: string) => {
    //     props.store.dispatch(updateNewMessageAC(body))
    // }

    return <StoreContext.Consumer>
        {(store)=> {
            const state = store.getState().dialogsPage;

            const onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }

            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageAC(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>
};*/

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