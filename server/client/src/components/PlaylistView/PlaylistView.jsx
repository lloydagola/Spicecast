import React, { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import './styles.css'; 
import 'font-awesome/css/font-awesome.min.css';

//allows us to reuse the same component for both podcasts and music
const formatTrack = ({title, path, _id, podcast, album}) => ({
    title,
    path,
    _id,
    parent: podcast || album
});

const areEqualTracks = (prevProps, nextProps) => {
    console.log({prevProps, nextProps});

    return prevProps === nextProps
}

const PlaylistView = React.memo(({track, classes, }) => {    

    const {audioState, playTrack} = useContext(AudioContext)
    
    if(!track){         
        return <div className={`playlist-view ${classes}`}></div>;        
    }
    else return <div className={`playlist-view ${classes ? classes : ""}`}>
                                    <div className="podcast-play" onClick={() => playTrack(formatTrack(track))}>
                                        {
                                            audioState.playState=="playing" && audioState.nowPlaying.path === track.path 
                                            ? <i className="far fa-pause-circle playing"/> 
                                            : <i className="far fa-play-circle"/>
                                        } 
                                        <p className="playing">{track.title} </p>                       
                                    </div>  
                                </div>
});

export default PlaylistView;