import React from 'react';
import './styles.css';

import React from 'react'

export default function SingleTrack(props) {
    return (
        <div className="SingleTrack">
            <header>
                <img src="" alt=""/>
                <p className="track-author">Lorem Ipsum reposted</p>  
                <p className="track-time">4 hours ago</p>      
                <i></i>                        
            </header>            
            <div className="track">
                <img src="" alt=""/>
                <>
                    <div className="track-details">
                        <i></i>
                        <h3>Halloween</h3>
                        <p>by <a>DJ Chrissy</a></p>
                        <div className="genre">
                            <p>#pop</p>
                            <i></i>
                        </div>
                    </div>       
                    <div className="track-waveform"></div>   
                    <div className="track-functions">
                        <button className="favorite"></button>
                        <button className="repost"></button>
                        <button className="download"></button>
                        <button className="add-to"></button>
                        <i></i>42
                        <i>17hrs ago</i>
                        <span className="badge">NEW</span>
                    </div>                              
                </>
            </div>
        </div>
    )
}

