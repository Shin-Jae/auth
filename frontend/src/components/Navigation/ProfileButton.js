import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import GroupFormModal from "../GroupFormPage";
import './ProfileButton.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div className="logged-in-nav">
                <span className="session-nav">
                    <span className="welcome-msg">
                        Welcome {user.username}
                    </span>
                    {/* <span> */}
                    <NavLink exact to="/group/new">
                        <button className="new-group-btn"><span className="new-group-btn-text">Create Squad</span></button>
                    </NavLink>
                    {/* <GroupFormModal /> */}
                    {/* </span> */}
                </span>
                {/* <button onClick={openMenu}> */}
                {/* <i className="fas fa-user-circle" /> */}
                <img className="profile-img" src={user.profileImg} onClick={openMenu} alt=""></img>
                {/* </button> */}
                {showMenu && (
                    <div className="profile-dropdown">
                        <button className="log-out-btn" onClick={logout}>Log Out</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProfileButton;
