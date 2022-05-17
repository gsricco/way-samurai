import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
    avatar:string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeLink}>
                <div><img src={props.avatar} alt="avatar"/></div>
                <div><span>{props.name}</span></div>
            </NavLink>
        </div>
    )
}
