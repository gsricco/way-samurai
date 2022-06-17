import React from 'react';
import s from './Users.module.css';
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";



const Users = (props:UsersPropsType) => {
if(props.users.length===0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU',
            followed: false,
            fullname: 'Dimych',
            status: 'i am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU',
            followed: true,
            fullname: 'Sasha',
            status: 'i am a boss',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU',
            followed: false,
            fullname: 'Andrey',
            status: 'i am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ])
}
    return (
        <div>
            {
                props.users.map(el=><div key={el.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={el.photoUrl}/>
                        </div>
                        <div>
                            {el.followed
                                ?<button onClick={()=>{props.unfollow(el.id)}}>UnFollow</button>
                                :<button onClick={()=>{props.follow(el.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.fullname}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;