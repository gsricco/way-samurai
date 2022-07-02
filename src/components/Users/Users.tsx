import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        console.log(this.props.currentPage,pagesCount)
        console.log(pages)
        return (
            <div>
                <div>
                    {pages.map(p => {
                            return <span onClick={(e)=>{this.onPageChange(p)}} className={this.props.currentPage === p ? s.selectedPage :""} >{p}</span>
                        })}
                </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={el.photos.small != null ? el.photos.small : userPhoto}
                                 alt={'gsricco'}/>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(el.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(el.id)
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
    }
}

export default Users;