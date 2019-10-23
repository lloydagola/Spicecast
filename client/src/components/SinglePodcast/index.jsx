import React from "react";
import "./style.css";
import {AppConsumer} from '../../context'
import PlaylistView from "../PlaylistView";

const SinglePodcast = (props) => <div className="single-podcast">                            
                                    <div className="image-view">
                                        <div className = "podcast-text">
                                            <h2>{props.title.toUpperCase()}</h2>
                                            <h5>{props.hosts[0]} | {props.hosts[1]}</h5>
                                            <div className="podcast-horizontal-line"/>
                                        </div> 
                                        <div className="filter"/>
                                        <img src={props.thumbnail} alt={`${props.title} podcast thumbnail`}/>                                            
                                    </div>
                                    <AppConsumer>
                                        { state => <PlaylistView episodes={props.episodes}/> }
                                    </AppConsumer>   
                                    <div className="podcast-vertical-widget">
                                        <p className="podcast-vertical-text">
                                            <b>007</b>                           
                                        </p>
                                        <div className="vertical-line"/>
                                        <div className="social-links"> 
                                            <i className="fab fa-facebook-f"/>
                                            <i className="fab fa-instagram"/>
                                            <i className="fab fa-twitter"/>
                                        </div>             
                                        <div className="vertical-line"/>
                                    </div>                       
                                 </div>
                   
        



export default SinglePodcast;