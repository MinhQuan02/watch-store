import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from '~/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // update menu later

    // useEffect(() => {
    //     if (!show && !isHovered) {
    //         setTimeout(() => {
    //             setShow(true);
    //         }, 5000);
    //     }
    // }, [isHovered]);

    const handleMenu = () => {
        setShow(show ? false : true);
    };

    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('logo')}>
                <img src={Image} alt="logo" />
                <span className={cx('title-logo')}>Watch</span>
            </Link>
            <div className={cx('menu')}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? 'pending' : isActive ? cx('active') : ''
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/product"
                            className={({ isActive, isPending }) =>
                                isPending ? 'pending' : isActive ? cx('active') : ''
                            }
                        >
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? 'pending' : isActive ? cx('active') : ''
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? 'pending' : isActive ? cx('active') : ''
                            }
                        >
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/following"
                            className={({ isActive, isPending }) =>
                                isPending ? 'pending' : isActive ? cx('active') : ''
                            }
                        >
                            Following
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={cx('auth')}>
                <div className={cx('menu-auth', cx(show ? 'hide' : 'open'))}>
                    <span onClick={handleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                    <div className={cx('box-menu')} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <ul>
                            <Link onClick={handleMenu} to="/login">
                                <li>Login</li>
                            </Link>
                        </ul>
                        <ul>
                            <Link onClick={handleMenu} to="/register">
                                <li>Register Account</li>
                            </Link>
                        </ul>
                        <ul>
                            <Link onClick={handleMenu} to="/settings">
                                <li>Settings</li>
                            </Link>
                        </ul>
                        <ul>
                            <Link onClick={handleMenu} to="/forget-password">
                                <li>Forget Password</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
