import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import {AppConsumer} from '../../context';
import PlaylistView from "../PlaylistView";
import {BASE_URL} from '../../utils/api';

const SinglePodcast = ({podcast, podcast : {title, _id, thumbnail, hosts, episodes}}) => {
       
                                return <div className="single-podcast">                            
                                        <div className="image-view">
                                            <div className = "podcast-text">
                                                <Link to ={`/podcasts/${_id}`}><h4>{title.toUpperCase()}</h4></Link>
                                                <h5>{hosts[0]} | {hosts[1]}</h5>
                                                <div className="horizontal-line podcast-horizontal-line white-background"/>
                                            </div> 
                                            <div className="filter"/>
                                            <img src={`${BASE_URL}/${thumbnail}`} alt={`${title} podcast thumbnail`}/>                                            
                                        </div>
                                        <AppConsumer>
                                            { state => 
                                                episodes.length < 1
                                                ?""
                                                :<PlaylistView track={{...episodes[episodes.length - 1], podcast:podcast}} classes="absolute"/>
                                                
                                            } 
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
                            }
                   
        



export default SinglePodcast;