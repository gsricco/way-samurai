import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateStatusThunkCreator: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;