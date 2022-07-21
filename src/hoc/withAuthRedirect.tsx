import React, {FC} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsTypeRedirect = {
    isAuth:boolean
}

const mapStateToPropsForRedirect = (state: AppStateType):MapStatePropsTypeRedirect => ({
    isAuth:state.auth.isAuth
});

// const mapStateToProps = (state: AppStateType): MapStatePropsTypeRedirect => ({
//     isAuth: state.auth.isAuth
// })

// export function withAuthRedirect <WCP>(Component:React.ComponentType<WCP>) {
//
//     class RedirectComponent extends React.Component<any, any>{
//         render(){
//             if(!this.props.isAuth) return <Redirect to={'/login'}/>
//             return <Component {...this.props as WCP}/>
//         }
//     }
//     let ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
//     return ConnectedAuthRedirectComponent;
// };

//ТИПИЗАЦИЯ
// Используем НЕ стрелочную функцию
//<WCP>(Component: React.ComponentType<WCP>) можно <WCP> заменить на <T>
//():MapStatePropsTypeRedirect
//...restProps as WCP

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

    const RedirectComponent: FC<MapStatePropsTypeRedirect> = (props) => {
        const { isAuth, ...restProps } = props
        if(!isAuth) return <Redirect to='/login' />

        return <Component {...restProps as WCP}/>
    }


    return connect<MapStatePropsTypeRedirect, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}
