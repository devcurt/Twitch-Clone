import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile__topLeft">
                <img src="https://img.icons8.com/color/48/000000/avatar.png" alt="avatar"/>
                
                
                <div className="profile__topLeftDetails">
                    <h1>cleverprogrammer</h1>
                    <h3>820k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className='active' >Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
        </div>
    )
}

export default Profile
