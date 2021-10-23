import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOptions from './HeaderOptions';

function Header() {
    return (
        <div className='header'>
        <div className= "header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt=""
            />
            <div className="header__search">
                <SearchIcon />
                <input type="text"/>
            </div>
        </div>

        <div className= "header__right">
            <HeaderOptions Icon={HomeIcon} title='Home' />
            <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOptions Icon={ChatIcon} title='Messaging'/>
            <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOptions avatar="https://i1.rgstatic.net/ii/profile.image/994825138630663-1614196204993_Q128/Mohamed-Mahmoud-171.jpg" title='Me'/>
        </div>
        </div>
    )
}

export default Header
