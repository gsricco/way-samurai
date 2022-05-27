
import {PostsType, StateType} from "../App";



export type StoreType = {
    _state:StateType
    changeNewText:(newText:string)=>void
    addPost:()=>void
    _onChange:()=>void
    subscribe:(callback:()=>void)=>void
    getState:()=>StateType
}

export const store:StoreType ={
    _state : {
        profilePage:{
            // messageForNewPost:'',
            posts:[
                {id: 1, message: 'First post', likesCount: 11},
                {id: 2, message: 'Hello samurai', likesCount: 25},
                {id: 2, message: 'Dobro pzl', likesCount: 5},
                {id: 4, message: 'Pole durakov', likesCount: 25},
            ],
            newPostText:'',
        },
        dialogsPage:{
            messages:[
                {id: 1, message: 'Hi Yo Apps OO Hi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OOHi Yo Apps OO'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Apps'},
                {id: 4, message: 'Dorop'},
                {id: 5, message: 'Это длинное сообщение но оно не вмещается'},
                {id: 6, message: 'Windows'},
            ],
            dialogs: [
                {id: 1, name: 'Sasha', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
                {id: 2, name: 'Ivan', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
                {id: 3, name: 'Vasy', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
                {id: 4, name: 'Pety', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
                {id: 5, name: 'Raty', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
                {id: 6, name: 'Sergio', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
            ]
        },
        sideBar:{
            friends: [
                {id: 1, name: 'Sasha', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
                {id: 2, name: 'Ivan', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
                {id: 3, name: 'Vasy', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'},
            ]
        }
    },
    changeNewText (newText:string) {
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
    },
    _onChange(){
        console.log('State changed');
    },
    subscribe(callback){
        this._onChange=callback;
    },
    getState(){
        return this._state;
    }

}


