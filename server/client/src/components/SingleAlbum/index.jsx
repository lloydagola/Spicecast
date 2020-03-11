import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import {AppConsumer} from '../../context';
import PlaylistView from "../PlaylistView";
import {BASE_URL} from '../../utils/api';

const SingleAlbum = ({album, album : {title, _id, thumbnail, contributingArtists, tracks}}) => 
                                <div className="single-album"> 
                                    <Link to ={`/albums/${_id}`}>
                                        <div className="album-art">
                                            <div className="album-filter"/>
                                            <img src={`${BASE_URL}/${thumbnail}`} alt={`${title} album thumbnail`}/> 
                                        </div>  
                                        <div className="album-buttons"/>        
                                        <div className = "album-text">
                                            <Link to ={`/albums/${_id}`}><h4>{title.toUpperCase()}</h4></Link>
                                            <Link to ={`/albums/${_id}`}><p>{contributingArtists[0].title}</p></Link>
                                            <div className="horizontal-line album-horizontal-line white-background"/>                                            
                                        </div>  
                                    </Link>
                                </div>

export default SingleAlbum;