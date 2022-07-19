import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import { userAPI} from "../../api/api";


export type UsersApiPropsType = {
    users: Array<UserType>
    pagesSize:number
    totalUsersCount:number
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // toggleFollowingProgress:(isFetching:boolean,userId:number)=>void
    followingInProgress:Array<number>
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
                                ? <button disabled={props.followingInProgress.some(id=>id===el.id)} onClick={() => {
                                    props.unfollow(el.id);
                                    /*userAPI.unfollow(el.id)
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                                    //     withCredentials:true,
                                    //     headers:{
                                    //         'API-KEY':'0a6bf10a-0783-484b-91da-65d7e9fda051'
                                    //     }
                                    // })
                                        .then(data => {
                                            if(data.resultCode==0) {
                                                props.unfollow(el.id)
                                            }
                                            props.toggleFollowingProgress(false,el.id);
                                        });*/

                                }}>UnFollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                    props.follow(el.id);
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{},{
                                    //     withCredentials:true,
                                    //     headers:{
                                    //         'API-KEY':'0a6bf10a-0783-484b-91da-65d7e9fda051'
                                    //     }
                                    // })
                                    // userAPI.follow(el.id)
                                    //     .then(data => { //response.data  -> { resultCode, data, message }
                                    //         if(data.resultCode==0) {
                                    //             props.follow(el.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false,el.id);
                                    //     });

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