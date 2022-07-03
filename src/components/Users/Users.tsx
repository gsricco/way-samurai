import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


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
        <div>
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
                                    props.unfollow(el.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(el.id)
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