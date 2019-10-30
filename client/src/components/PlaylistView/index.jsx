import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';   
import 'font-awesome/css/font-awesome.min.css';


const PlaylistView = props => {
    
    if(!props.episode){         
        return <div className="playlist-view"></div>;        
    }
    else return <AppConsumer>
                    {
                       state => {
                           console.log("playing ",state.audioState.nowPlaying.title,"? ",state.audioState.playing);
                           
                        return <div className="playlist-view">
                            <div className="podcast-play" onClick={() => state.playTrack({...props.episode, podcast:{...props.episode.podcast, title:props.podcast}})}>
                                {
                                state.audioState.playing && state.audioState.nowPlaying.title === props.episode.title 
                                ? <i className="far fa-pause-circle"/> 
                                : <i className="far fa-play-circle"/>
                                } 
                                <p>{props.episode.title} </p>                       
                            </div>  
                        </div>
                       }
                    }
                </AppConsumer>  
                        

   
};

export default PlaylistView;