import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar ='https://img.icons8.com/color/48/000000/avatar.png'
                name='cleverprogrammer'
                followers='820k' />

                <Channel avatar ='https://static-cdn.jtvnw.net/jtv_user_pictures/b1763715-7b44-4d46-8d9d-f3ca6d17bdcb-profile_image-300x300.png'
                name='PiNNyBoy'
                followers='200k' />

                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar='https://img.icons8.com/color/48/000000/boy-avatar.png'
                name='davidrakosi_'
                followers='1352' />

                <p className='sidebar__topShowMore'>Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                <i className="fas fa-search"></i>
                <input type="text" placeholder='Search to Add Friends' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
