import React from 'react';
import "./styles.css";

export default function Sidebar(props) {
    return (
        <div className="sidebar">
          <div className="sidebar-content">
            {props.children}            
          </div>
        </div>
    )
}
