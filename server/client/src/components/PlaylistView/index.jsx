import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';   
import 'font-awesome/css/font-awesome.min.css';

//allows us to reuse the same component for both podcasts and music
const formatTrack = ({title, path, _id, podcast, album}) => ({
    title,
    path,
    _id,
    parent: podcast || album
});

const PlaylistView = ({track, classes}) => {    
    
    if(!track){         
        return <div className={`playlist-view ${classes}`}></div>;        
    }
    else return <AppConsumer>
                    {
                       state => <div className={`playlist-view ${classes ? classes : ""}`}>
                                    <div className="podcast-play" onClick={() => state.playTrack(formatTrack(track))}>
                                        {
                                            state.audioState.playState=="playing" && state.audioState.nowPlaying.title === track.title 
                                            ? <i className="far fa-pause-circle playing"/> 
                                            : <i className="far fa-play-circle"/>
                                        } 
                                        <p className="playing">{track.title} </p>                       
                                    </div>  
                                </div>
                       }
                    
                </AppConsumer>  
                        

   
};

export default PlaylistView;