import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';                                  


const PlaylistView = props => {
    
    if(!props.episode){         
        return <div className="playlist-view"></div>;        
    }
    else return <AppConsumer>
                    {
                       state => <div className="playlist-view">
                                    <div className="podcast-play" onClick={() => state.playTrack({...props.episode, podcast:{...props.episode.podcast, title:props.podcast}})}>
                                       <i className="far fa-play-circle"/> <p>{props.episode.title} </p>                       
                                    </div>  
                                </div>
                    }
                </AppConsumer>  
                        

   
};

export default PlaylistView;