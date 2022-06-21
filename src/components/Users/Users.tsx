import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'


const Users = (props:UsersPropsType) => {
if(props.users.length===0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response=>{
        props.setUsers(response.data.items);
        });


    /*props.setUsers([
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
    ])*/
}
    return (
        <div>
            {
                props.users.map(el=><div key={el.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={el.photos.small != null ? el.photos.small:userPhoto}/>
                        </div>
                        <div>
                            {el.followed
                                ?<button onClick={()=>{props.unfollow(el.id)}}>UnFollow</button>
                                :<button onClick={()=>{props.follow(el.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;