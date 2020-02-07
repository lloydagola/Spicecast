import React from 'react';
import "./styles.css";

const MainMenu = () => <menu className="main-menu">
    <div className="menu-logo">
        <a href="localhost:3001"><h1> <i className="fas fa-stream"/> Spicecast</h1></a>
    </div>
    <ul className="menu-items">         
        <li><a href="localhost:3001"><i className="fas fa-plus"/> Post</a></li>
        <li><a href="localhost:3001"><i className="fas fa-cloud-upload-alt"/> Uploads</a></li>
        <li><a href="localhost:3001"><i className="fas fa-th-large"/> Categories</a></li>
        <li><a href="localhost:3001"><i className="fas fa-bell yellow"/> 3</a></li>
        <li><a href="localhost:3001"><i className="fas fa-user"/> Sign in</a></li>
    </ul>

</menu>

export default MainMenu;