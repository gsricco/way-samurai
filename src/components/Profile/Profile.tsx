import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type ProfilePropsType = {
//     store: StoreType
// }

const Profile = () => {
    return (

        <div>
            <ProfileInfo/>
            <MyPostsContainer />
            {/*<MyPostsContainer store={props.store}/>*/}

        </div>

    )
}

export default Profile;