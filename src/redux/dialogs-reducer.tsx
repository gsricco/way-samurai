import React from 'react';
import {ActionType} from "./state";
import {DialogsPageType} from "../App";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



const dialogsReducer = (state:DialogsPageType, action:ActionType) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        default: return state;
    }
    /*if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
        // state.dialogsPage.newMessageBody = action.body;

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 7, message: body});
    }


    return state;*/
};
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageAC = (newMassageText: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newMassageText
} as const)



export default dialogsReducer;