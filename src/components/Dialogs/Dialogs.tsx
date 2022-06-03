import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";
import {ActionType, sendMessageAC, updateNewMessageAC} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                  avatar={d.avatar}/>)
    let messagesElement = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.state.newMessageBody;

    // let newSend = React.createRef<HTMLTextAreaElement>()
    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
        // let text = newSend.current?.value
        // alert(text);
    }
    const onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageAC(body))
    }

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

