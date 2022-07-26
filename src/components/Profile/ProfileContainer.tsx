import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getStatusThunkCreator,
    getUsersProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string,
}


export type MapStatePropsType = {
    profile: null|ProfileType
    status:string
    updateStatus:string
}

type MapDispatchPropsType = {
    getUsersProfileThunkCreator: (userId:number) => void
    // setUsersProfile: (profile: ProfileType) => void
    getStatusThunkCreator:(userId:number)=>void
    updateStatusThunkCreator:(status:string)=>void
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & ownProfilePropsType

export type ownProfilePropsType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            // userId = 2;
            userId = '2';
        }
        this.props.getUsersProfileThunkCreator(+userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //     .then(response => {
        //         this.props.setUsersProfile(response.data);
        //     });
        this.props.getStatusThunkCreator(+userId)
    }
componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>) {
        // debugger
    console.log('componentDidUpdate');
    if(prevProps.status !== this.props.status) {
        this.setState({
            status: this.props.status
        })
    }
}

    // componentDidUpdate(prevProps,prevState) {
    //     console.log('componentDidUpdate')
    // }

    render() {
        console.log('render')

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusThunkCreator={this.props.updateStatusThunkCreator}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    updateStatus:state.profilePage.updateStatus
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfileThunkCreator,updateStatusThunkCreator,getStatusThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let AuthRedirectComponent = (props:ProfilePropsType)=>{
//     if(!this.props.isAuth) return <Redirect to={'/login'}/>
//
//     return <ProfileContainer {...props} />
// }

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

