import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}

export type MapStatePropsType = {
    profile: null|ProfileType
}
type MapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType) => void
}

type ProfilePropsType = RouteComponentProps<PathParamsType> & ownProfilePropsType

export type ownProfilePropsType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
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
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(withUrlDataContainerComponent);