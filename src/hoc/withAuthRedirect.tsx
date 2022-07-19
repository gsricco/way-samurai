import React, {FC} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsTypeRedirect = {
    isAuth:boolean
}

let mapStateToPropsForRedirect = (state: AppStateType):MapStatePropsTypeRedirect => ({
    isAuth:state.auth.isAuth
});

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


export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

    const RedirectComponent: FC<MapStatePropsTypeRedirect> = (props) => {
        const { isAuth, ...restProps } = props
        if(!isAuth) return <Redirect to='/login' />

        return <Component {...restProps as WCP}/>
    }

    const mapStateToProps = (state: AppStateType): MapStatePropsTypeRedirect => ({
        isAuth: state.auth.isAuth
    })
    return connect<MapStatePropsTypeRedirect, {}, WCP, AppStateType>(mapStateToProps)(RedirectComponent)
}
