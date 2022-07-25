import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {setStatusFR, setUsers, statuses} from "../../redux/friends-reducer";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import photoUser from '../../assets/images/user.png'


const Friends = (props: PropsType) => {

    if (props.status === statuses.NOT_INITIALIZED) {
        props.setStatusFR(statuses.INPROGRESS)
        axios.get('https://social-nesamuraijs.com/api/1.0/users')
            .then((res) => {

                props.setStatusFR(statuses.SUCCESS)
                props.setUsers(res.data.items)
            })
    }

    if (!props.users.length) return <div>Users not found</div>


    return <div>{props.users.map(user =>
        <div>
            <img src={(user.photos.small) ? user.photos.small : photoUser} style={{width: 100}} alt={'ricco'}/>
            <div>{user.name}</div>
            <div>{(user.status) ? user.status : 'no status'}</div>
        </div>
    )}
    </div>
};

type PropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    users: Array<UserType>
    status: string
}

type mapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void
    setStatusFR: (status: string) => void
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.friends.users,
        status: state.friends.status
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setStatusFR: (status: string) => {
            dispatch(setStatusFR(status))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);