import React, { Component } from 'react'
import './navbar.styles.sass'
import { Link } from 'react-router'
import IoAndroidContact from 'react-icons/io/android-contact'
import IoAndroidNotifications from 'react-icons/io/android-notifications'
import IoAndroidNotificationsNone from 'react-icons/io/android-notifications-none'
import IosPerson from 'react-icons/io/ios-person'
import IosCog from 'react-icons/io/ios-cog'
import Power from 'react-icons/io/power'

const active = {
    backgroundColor: '#4a535c',
    backgroundColor: '#3949AB'
}

class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="row">
                    <div className="col col--3-of-12 logo">
                        <Link to="/" >1t.kz</Link>
                    </div>
                    <div className="col col--6-of-12 menu ">
                        <Link to="/news" activeStyle={active}>News</Link>
                        <Link to="/search" activeStyle={active}>Search</Link>
                        <Link to="/workspace" activeStyle={active}>Workspace</Link>
                    </div>
                    <div className="col col--3-of-12 profile">
                        <a href="#" className="notifications-link"><IoAndroidNotificationsNone /></a>
                        <a href="#" className="profile-link">
                            <IoAndroidContact />
                            <ul className="profile-submenu">
                                <li>
                                    <a href="#">
                                        <IosPerson className="profile-submenu-icon" />
                                        <span>Профиль</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IosCog className="profile-submenu-icon" />
                                        <span>Настройки</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Power className="profile-submenu-icon" />
                                        <span>Выход</span>
                                    </a>
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
