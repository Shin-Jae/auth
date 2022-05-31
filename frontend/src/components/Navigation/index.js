import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <span className='login-btn'>
                    <LoginFormModal />
                </span>
                <NavLink to="/signup" style={{ textDecoration: "none" }}>Sign Up</NavLink>
            </>
        );
    }

    return (
        <ul className='nav-container'>
            <li className='nav-links'>
                <span>
                    <NavLink exact to="/" style={{ color: "blue", textDecoration: "none" }}>
                        <i className="fa-solid fa-people-group fa-2xl"></i>
                        <div className='home-text'>
                            YelpSquad
                        </div>
                    </NavLink>
                </span>
                <span>
                    <input type="text" placeholder='Search' />
                    <button>Search</button>
                </span>
                <span>
                    Welcome {sessionUser?.username}
                </span>
                <span>
                    <NavLink exact to="/group/new">
                        <button>Create Group</button>
                    </NavLink>
                </span>
                <span className='auth-btns'>
                    {isLoaded && sessionLinks}
                </span>
            </li>
        </ul >
    );
}

export default Navigation;
