import React from 'react';
import Sidebar from '../Sidebar';
import './styles.css';

export default function SidebarLeft() {
    return (
        <Sidebar>
           <div className="sidebar-left">
            <div className="profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Profile-jose-bermudez.jpg" alt="Profile picture"/>
                <div>
                    <h5>Eric Summers</h5>
                    <p>View Profile</p>
                </div>
            </div>
                <ul>
                    <li><div><i className="far fa-clone"/><h5>Feed</h5></div></li>
                    <li><div><i className="fas fa-compass"/><h5>New Shows</h5></div></li>
                </ul>
                <div className="horizontal-line grey-background"/>
                <ul>
                    <li><div><i className="fas fa-heart"/><h5>Favourites</h5></div></li>
                    <li><div><i className="fas fa-history"/><h5>History</h5></div></li>
                    <li><div><i className="far fa-clock"/><h5>Listen Later</h5></div></li>
                    <li><div><i className="fas fa-list"/><h5>Playlists</h5></div></li>
                </ul>
                <div className="horizontal-line grey-background"/>
                <ul>
                    <li><div><i className="fas fa-chart-line"/><h5>Trending</h5></div></li>
                </ul>
           </div>
        </Sidebar>
    )
}
