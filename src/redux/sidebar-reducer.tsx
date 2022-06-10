import React from 'react';
import {ActionType} from "./store";
import {SideBarPageType} from "../App";


let initialState = {
    friends: [
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
    ]
}

const sideBarReducer = (state: SideBarPageType = initialState, action: ActionType) => {
    return state;
};

export default sideBarReducer;