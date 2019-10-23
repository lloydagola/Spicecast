import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';

const renderPlaylist = (playlist, playTrack) => playlist.map(
                                        (episode, index) => <div key={index} className="podcast-play">
                                                                <i className="far fa-play-circle" onClick={() => playTrack(episode)}/> {episode.title}                        
                                                            </div>   
                                    );


const PlaylistView = props => {
    
    if(props.episodes.length < 1){         
        return <div className="playlist-view"></div>;        
    }
    else return <AppConsumer>
                    {
                       state => <div className="playlist-view">{renderPlaylist(props.episodes, state.playTrack)}</div>
                    }
                </AppConsumer>  
                        

   
};

export default PlaylistView;