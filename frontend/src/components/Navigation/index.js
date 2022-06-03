import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupModal';

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
                <span>
                    <LoginFormModal />
                </span>
                <span>
                    <SignupFormModal />
                </span>
            </>
        );
    }

    return (
        <ul className='nav-container'>
            <li className='nav-links'>
                <span>
                    <NavLink exact to="/" style={{ color: "orange", textDecoration: "none" }}>
                        <i className="home-icon fa-solid fa-people-group fa-2xl"></i>
                        <div className='home-text'>
                            YelpSquad
                        </div>
                    </NavLink>
                </span>
                <span className='search'>
                    <input className='search-input' type="text" placeholder='Search' />
                    <button className='search-btn'>Search</button>
                </span>
                <span className='auth-btns'>
                    {isLoaded && sessionLinks}
                </span>
            </li>
        </ul >
    );
}

export default Navigation;
