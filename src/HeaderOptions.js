import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"

function HeaderOptions({avatar, Icon , title}) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className='headerOption__avatar' src={avatar}/>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
