import {PostsType, StateType} from "../App";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


export type StoreType = {
    _state: StateType
    // changeNewText:(newText:string)=>void
    // addPost:()=>void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof sendMessageAC>

/*type AddPostActionType={
    type:'ADD-POST'
    // newText:string
}
type AddPostActionType=ReturnType<typeof addPostAC>

type UpdateActionType={
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
}
type UpdateActionType=ReturnType<typeof changeNewTextAC>*/

export const addPostAC = () => ({type: ADD_POST} as const)
export const changeNewTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageAC = (newMassageText: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newMassageText
} as const)


export const store: StoreType = {
    _state: {
        profilePage: {
            // messageForNewPost:'',
            posts: [
                {id: 1, message: 'First post', likesCount: 11},
                {id: 2, message: 'Hello samurai', likesCount: 25},
                {id: 2, message: 'Dobro pzl', likesCount: 5},
                {id: 4, message: 'Pole dur', likesCount: 25},
            ],
            newPostText: 'IT-text',
        },
        dialogsPage: {
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
        },
        sideBar: {
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
    },
    /*changeNewText (newText:string) {
        this._state.profilePage.newPostText = newText;
        this._onChange();
    },
    addPost (){
        const newPost:PostsType = {
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        if(this._state.profilePage.newPostText) {
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange();
        }
    },*/
    _onChange() {
        console.log('State changed');
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            if (this._state.profilePage.newPostText) {
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._onChange();
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._onChange();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange();
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 7, message: body});
            this._onChange();
        }
    }

}


