import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';

class AudioPlayer extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidUpdate(previousProps, previousState){
        console.log("this.player.src",this.player.src);
        console.log("previousProps",previousProps);
        console.log("previousState",previousState);
        this.player.pause();
        this.player.currentTime = 0;
        this.player.play();                
    }

    render(){

        return <AppConsumer>
                   { 
                       state => <section id="audio-player">
                                  <div className="audio-details">
                                      <h4>
                                          {state.audioState.nowPlaying.podcast.title} - {state.audioState.nowPlaying.title}
                                      </h4>
                                  </div>
                                  <audio
                                    ref={ref => this.player = ref}
                                    controls
                                    preload="auto"
                                    src={state.audioState.nowPlaying.path}>
                                        Your browser does not support the
                                        <code>audio</code> element.
                                  </audio>
                                </section> 
                   }
               </AppConsumer>  
    }
} 
    
    export default AudioPlayer;