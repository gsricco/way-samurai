import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SideBarPageType} from "../../App";

type NavbarPropsType = {
    sideBar?: SideBarPageType
}

const Navbar = (props: NavbarPropsType) => {
    const freindsElement = props.sideBar?.friends.map((f) => {
        return (
            <div className={s.friends}>
                <div className={s.avatarFr}><img src={f.avatar} alt="avatar"/></div>
                <div className={s.nameFr}><span>{f.name}</span></div>
            </div>
        )
    }) ||[]
    return (
        <nav className={s.nav}>
            <div className={s.item }>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.sideBar}>
                <span>Friends:</span>
                <div className={s.freindsElement}>{freindsElement}</div>
            </div>
        </nav>
    )
}

export default Navbar;