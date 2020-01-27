import React, { Fragment, useContext } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

function Nav() {
    const userContext = useContext(UserContext);

    const { isAuthenticated, logout, updateStars, user } = userContext;

    const onLogout = () => {
        logout();
    };

    // const put = () => {
    //     /* THIS IS FOR TESTING UPDATE STARS */
    //     updateStars(user, 3);
    // };

    const authLinks = (
        <Fragment>
            {/* <button onClick={put}></button>{' '} */}
            {/* THIS IS FOR TESTING UPDATE STARS */}
            <li>Hi, {user && user.name}!</li>
            <li className='hvr-icon-spin'>
                <i className='fas fa-star stars hvr-icon'></i>
                <span className='small'>x </span>
                {user && user.stars}
            </li>
            <li>
                <a className='hvr-icon-forward' onClick={onLogout} href='#!'>
                    <i className='fas fa-sign-out-alt hvr-icon white'></i>
                    <span className='hide-sm white hvr-underline-from-left ml-1'>
                        Logout
                    </span>
                </a>
            </li>
        </Fragment>
    ); // if there is a user, display the users name

    const guestLinks = (
        <Fragment>
            <div className='nav-links'>
                <div className='hvr-underline-from-right hvr-rotate'>
                    <Link to='/register' className='white'>
                        Register
                    </Link>
                </div>
                <div className='hvr-underline-from-right hvr-rotate'>
                    <Link to='/login' className='white'>
                        Login
                    </Link>
                </div>
            </div>
        </Fragment>
    ); // if there is a user, display the users star count

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className='navbar d-flex flex-row'>
            <Link to='/' className='title-link'>
                <h1 style={navStyle} className='title hvr-icon-spin'>
                    <img
                        className='hvr-icon logo'
                        src='/images/starjump.png'
                        alt='starjump'
                    />
                    <span className='hvr-underline-from-left'>Star Jump</span>
                </h1>
            </Link>
            <ul className='nav-links'>
                {isAuthenticated ? authLinks : guestLinks}
                {/*                 <Link style={navStyle} to='/mainapp'>
                    <li>Main App</li>
                </Link> */}
            </ul>
        </nav>
    );
}

export default Nav;
