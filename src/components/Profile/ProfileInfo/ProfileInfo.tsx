import React from 'react';
import s from "../Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import photoUser from '../../../assets/images/user.png'
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile:null|ProfileType
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.backHeader}
                     src="https://media-exp1.licdn.com/dms/image/C561BAQH3TM7unc6Pig/company-background_10000/0/1551816139295?e=2147483647&v=beta&t=IhY_m8xs9ij-Oz8RKT1x-zY1RJ6d27TLvdoMVzit9Dc"
                     alt=""/>
            </div>
            <div className={s.avatar}>
                <img className={s.avatarImg}
                     src={props.profile.photos.large||photoUser}
                     alt=""/>
                <ProfileStatus status={'Hello my friends'}/>
                <div className={s.avatarName}>{props.profile.fullName}</div>
                <div className={s.descriptionUser}>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;