import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://i.pinimg.com/originals/a3/af/35/a3af356c5d57a46a1abdf37421ce3ac3.jpg" alt=""></img>
                <Avatar className="sidebar__avatar" />
                <h2>Mohamed Mahmoud</h2>
                <h4>Mokhairy.mahmoud@gmail.com</h4>
            </div>   

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views of your post</p>
                    <p className="sidebar__statNumber">500</p>
                </div>
            </div>

            <div className="sidebar__bottom">
               <p>Recent</p> 
            </div>
        </div>
    )
}

export default Sidebar
