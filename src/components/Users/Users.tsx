import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
// import axios from "axios";
import { userAPI} from "../../api/api";


export type UsersApiPropsType = {
    users: Array<UserType>
    pagesSize:number
    totalUsersCount:number
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


const Users = (props:UsersApiPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.usersContainer}>
            <div className={s.pagesNumber}>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>
                })}
            </div>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/'+el.id}><img className={s.photo}
                                          src={el.photos.small != null ? el.photos.small : userPhoto}
                                          alt={'gsricco'}/>
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {

                                    userAPI.deleteUsers(el.id)
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                                    //     withCredentials:true,
                                    //     headers:{
                                    //         'API-KEY':'0a6bf10a-0783-484b-91da-65d7e9fda051'
                                    //     }
                                    // })
                                        .then(response => {
                                            if(response.data.resultCode==0) {
                                                props.unfollow(el.id)
                                            }
                                        });

                                }}>UnFollow</button>
                                : <button onClick={() => {

                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{},{
                                    //     withCredentials:true,
                                    //     headers:{
                                    //         'API-KEY':'0a6bf10a-0783-484b-91da-65d7e9fda051'
                                    //     }
                                    // })
                                    userAPI.postUsers(el.id)
                                        .then(response => {
                                            if(response.data.resultCode==0) {
                                                props.follow(el.id)
                                            }
                                        });

                                }}>Follow</button>}
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