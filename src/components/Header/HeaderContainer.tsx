import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true //авторизация
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }


    render() {
        return <Header {...this.props} />
    }
}

export type mapStatePropsType = {
    login: string | null
    isAuth: boolean
    // id:number|null
    // email:string|null
}


type mapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        // id: state.auth.id,
        // email:state.auth.email

    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);