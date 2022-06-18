import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import PlaylistView from "../PlaylistView/PlaylistView";
import {BASE_URL} from '../../utils/api';

const renderHosts = contributors => 
    contributors
    ?contributors.map(contributor => contributor.title + " | ")
    :null


const SinglePodcast = React.memo(({podcast, podcast : {title, _id, thumbnail, hosts, episodes}}) => {

    console.log(title);
       
                                return <div className="single-podcast">    
                                 <Link to ={`/podcasts/${_id}`}>
                                        <div className="image-view">
                                            <div className = "podcast-text">
                                               <h4>{title.toUpperCase()}</h4>
                                                <div className="horizontal-line podcast-horizontal-line white-background"/>
                                                {
                                                    hosts.length < 1
                                                    ?""
                                                    :<h5>{renderHosts(hosts)}</h5>
                                                }
                                            </div> 
                                            <div className="filter"/>
                                            <img src={`${BASE_URL}/${thumbnail}`} alt={`${title} podcast thumbnail`}/>                                            
                                        </div>
                                     </Link>     
                                {episodes.length < 1
                                ?null
                                :<PlaylistView track={{...episodes[episodes.length - 1], podcast:podcast}} classes="absolute"/>}
                                            
                                        
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
                            })
                   
        



export default SinglePodcast;