import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsPageType
    sendMessage: () => void
    // isAuth:boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                            avatar={d.avatar}/>)
    let messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;


    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)

    }

    // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

