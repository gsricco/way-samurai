import React from 'react';
import {ActionType} from "./store";
import {DialogsPageType} from "../App";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        messages: [
            {
                id: 1,
                message: 'Hi Yo Apps OO Hi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OO'
            },
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Apps'},
            {id: 4, message: 'Dor'},
            {id: 5, message: 'Это длинное сообщение но оно не вмещается'},
            {id: 6, message: 'Windows'},
        ],
        dialogs: [
            {
                id: 1,
                name: 'Sasha',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
            },
            {
                id: 2,
                name: 'Ivan',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
            },
            {
                id: 3,
                name: 'Vas',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
            },
            {
                id: 4,
                name: 'Petr',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
            },
            {
                id: 5,
                name: 'Raty',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
            },
            {
                id: 6,
                name: 'Sergio',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
            },
        ],
        newMessageBody: '',
    };

const dialogsReducer = (state:DialogsPageType=initialState, action:ActionType) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody:action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages:[...state.messages,{id: 7, message: body}]
            };
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