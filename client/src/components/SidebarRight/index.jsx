import React from 'react';
import Sidebar from '../Sidebar';
import './styles.css';

export default function SidebarRight() {
    return (
        <Sidebar >
            <div className="sidebar-right">                
                <h4>People to follow</h4>
                <div className="follow">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Profile-jose-bermudez.jpg" alt="Profile picture"/>
                    <div className="follow-profile">
                        <h5>Chris Coco</h5>
                        <h6>98,000 followers</h6>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="follow">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Profile-jose-bermudez.jpg" alt="Profile picture"/>
                    <div className="follow-profile">
                        <h5>BBC World Sercice</h5>
                        <h6>1,000 followers</h6>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="follow">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Profile-jose-bermudez.jpg" alt="Profile picture"/>
                    <div className="follow-profile">
                        <h5>Desi</h5>
                        <h6>7,000 followers</h6>
                        <button>Follow</button>
                    </div>
                </div>
                <div className="horizontal-line light-grey-background"/>
            </div>
        </Sidebar>
    )
}
