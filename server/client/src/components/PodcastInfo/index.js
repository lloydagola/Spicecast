import './styles.css';

import React from 'react'

export default function index({thumbnail, title, hosts}) {
    return (
        <div className = "podcast-info">
            <img src = {thumbnail} />
            <div className="podcast-info-text">
                <h3>{title}</h3>
                {hosts}                    
                <h5>{title}</h5>
            </div>
        </div>
    )
}
