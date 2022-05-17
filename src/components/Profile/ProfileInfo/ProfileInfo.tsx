import React from 'react';
import s from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.backHeader}
                     src="https://media-exp1.licdn.com/dms/image/C561BAQH3TM7unc6Pig/company-background_10000/0/1551816139295?e=2147483647&v=beta&t=IhY_m8xs9ij-Oz8RKT1x-zY1RJ6d27TLvdoMVzit9Dc"
                     alt=""/>
            </div>
            <div className={s.avatar}>
                <img className={s.avatarImg}
                     src="https://oops.ru/wp-content/uploads/2021/02/dzheyms-kemeron-vypustit-komiksy-po-motivam-avatara.jpg"
                     alt=""/>
                <div>Avatar Name</div>
                <div>Description</div>
            </div>
        </div>
    );
};

export default ProfileInfo;