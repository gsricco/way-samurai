import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props:DialogsPropsType) => {
   /* let dialogs = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Vasy'},
        {id: 4, name: 'Pety'},
        {id: 5, name: 'Raty'},
        {id: 6, name: 'Sergio'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Apps'},
        {id: 4, message: 'Dorop'},
        {id: 5, message: 'Pro'},
        {id: 6, message: 'Windows'},
    ]*/

    let dialogsElement = props.state.dialogs.map(d=><DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElement = props.state.messages.map(m=><Message key={m.id} message={m.message}/>)

    let newSend = React.createRef<HTMLTextAreaElement>()
    const addAnser = () => {
        let text = newSend.current?.value
        alert(text);
       /* тоже самое
       if(newSend.current) {
            let text = newSend.current.value
            alert(text);
        }*/
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                {messagesElement}
                <div className={s.anser}>
                    <textarea ref={newSend}></textarea>
                    <button onClick={addAnser}>Anser</button>
                </div>
            </div>
        </div>
    );
};

