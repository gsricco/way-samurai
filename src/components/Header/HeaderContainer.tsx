import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataThunkCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {

        this.props.getAuthUserDataThunkCreator()
        // userAPI.setAuthUserData()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true //авторизация
        // })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, login, email} = response.data.data;
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     });
    }


    render() {
        return <Header {...this.props} />
    }
}

export type mapStatePropsType = {
    login: string | null
    isAuth: boolean
}


type mapDispatchPropsType = {
    getAuthUserDataThunkCreator: () => void
}

export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {getAuthUserDataThunkCreator})(HeaderContainer);