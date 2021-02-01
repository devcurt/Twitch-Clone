import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

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
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/jf3GdvAFHsE'}
                        title={'Top 5 Programming Languages to Learn in 2021 to Get a Job Without a College Degree'} />
                    <RecentItem
                        url={"https://www.youtube.com/embed/-bjJetWnNZg"}
                        title={'Backend Developer Guide 2021'} />
                    <RecentItem
                        url={"https://www.youtube.com/embed/CUGPbZ77OuQ"}
                        title={'Learn React JS with Me (for Beginners)'} />
                    <RecentItem
                        url={"https://www.youtube.com/embed/Tq4beHrgV64"}
                        title={'How to Get a Job as a ReactJS Developer in 2021'} />
                </div>
                
                <div className="profile__categories">
                    <h2>cleverprogrammer's recently streamed Catogories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" alt="avatar" />
                    <h3>Science & Technology</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
