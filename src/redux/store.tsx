// import {StateType} from "../App";
// import profileReducer, {addPostAC, changeNewTextAC, setUsersProfile} from "./profile-reducer";
// import dialogsReducer, {sendMessageAC, updateNewMessageAC} from "./dialogs-reducer";
// import sideBarReducer from "./sidebar-reducer";
// import {
//     followAC,
//     setCurrentPageAC,
//     setUsersAC,
//     setUsersTotalCountAC,
//     toggleIsFetchingAC,
//     unfollowAC
// } from "./users-reducer";
//
// export type StoreType = {
//     _state: StateType
//     _onChange: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionType) => void
// }
//
//
//
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'First post', likesCount: 11},
//                 {id: 2, message: 'Hello samurai', likesCount: 25},
//                 {id: 2, message: 'Dobro pzl', likesCount: 5},
//                 {id: 4, message: 'Pole dur', likesCount: 25},
//             ],
//             newPostText: 'IT-text',
//         },
//         dialogsPage: {
//             messages: [
//                 {
//                     id: 1,
//                     message: 'Hi Yo Apps OO Hi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OO'
//                 },
//                 {id: 2, message: 'Yo'},
//                 {id: 3, message: 'Apps'},
//                 {id: 4, message: 'Dor'},
//                 {id: 5, message: 'Это длинное сообщение но оно не вмещается'},
//                 {id: 6, message: 'Windows'},
//             ],
//             dialogs: [
//                 {
//                     id: 1,
//                     name: 'Sasha',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ivan',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//                 {
//                     id: 3,
//                     name: 'Vas',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//                 {
//                     id: 4,
//                     name: 'Petr',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//                 {
//                     id: 5,
//                     name: 'Raty',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//                 {
//                     id: 6,
//                     name: 'Sergio',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//             ],
//             newMessageBody: '',
//         },
//         sideBar: {
//             friends: [
//                 {
//                     id: 1,
//                     name: 'Sasha',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//                 {
//                     id: 2,
//                     name: 'Ivan',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//                 {
//                     id: 3,
//                     name: 'Vas',
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'
//                 },
//             ]
//         }
//     },
//     _onChange() {
//         console.log('State changed');
//     },
//     subscribe(callback) {
//         this._onChange = callback;
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer( this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
//         this._state.sideBar = sideBarReducer( this._state.sideBar, action);
//
//             this._onChange();
//         }
//
//
// }
//
//
export {}