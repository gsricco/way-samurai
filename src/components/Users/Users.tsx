import React from 'react';
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<UsersPropsType> {

   /* constructor(props:UsersPropsType){
        super(props);

    }*/

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={el.photos.small != null ? el.photos.small : userPhoto} alt={'gsricco'}/>
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