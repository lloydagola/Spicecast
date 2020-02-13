import React from "react";
import "./style.css";
import {AppConsumer} from '../../context';
import PlaylistView from "../PlaylistView";
import {BASE_URL} from '../../utils/api';

const SinglePodcast = (props) => <div className="single-podcast">                            
                                    <div className="image-view">
                                        <div className = "podcast-text">
                                            <h4>{props.title.toUpperCase()}</h4>
                                            <h5>{props.hosts[0]} | {props.hosts[1]}</h5>
                                            <div className="horizontal-line podcast-horizontal-line white-background"/>
                                        </div> 
                                        <div className="filter"/>
                                        <img src={`${BASE_URL}/${props.thumbnail}`} alt={`${props.title} podcast thumbnail`}/>                                            
                                    </div>
                                    <AppConsumer>
                                        { state => <PlaylistView episode={props.episodes[props.episodes.length -1]} podcast={props.title}/> }
                                    </AppConsumer>   
                                    <div className="podcast-vertical-widget">
                                        <p className="podcast-vertical-text">
                                            <b>007</b>                           
                                        </p>
                                        <div className="vertical-line white"/>
                                        <div className="social-links"> 
                                            <i className="fab fa-facebook-f"/>
                                            <i className="fab fa-instagram"/>
                                            <i className="fab fa-twitter"/>
                                        </div>             
                                        <div className="vertical-line white"/>
                                    </div>                       
                                 </div>
                   
        



export default SinglePodcast;