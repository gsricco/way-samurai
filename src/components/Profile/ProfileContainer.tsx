import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string,
}


export type MapStatePropsType = {
    profile: null|ProfileType
}

type MapDispatchPropsType = {
    getUsersProfileThunkCreator: (userId:number) => void
    // setUsersProfile: (profile: ProfileType) => void
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
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    profile: state.profilePage.profile,
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfileThunkCreator}),
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

