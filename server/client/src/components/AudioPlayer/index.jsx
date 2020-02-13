import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';
import {BASE_URL} from '../../utils/api';

class AudioPlayer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pause: this.props.pause,
            resume: this.props.resume
        }
    }

    componentDidMount(){
        this.player.addEventListener('pause', () => this.state.pause());
        this.player.addEventListener('play', () => {
            if(!this.props.playing){
                this.state.resume();
                this.player.play();
            }
        });
    }

    componentDidUpdate(previousProps, previousState){       

        if(!this.props.playing){
            this.player.pause();
            
            console.log("audio player");
            console.log(previousProps);
            return;
            
        }
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
                                    src={`${BASE_URL}/${state.audioState.nowPlaying.path}`}>
                                        Your browser does not support the
                                        <code>audio</code> element.
                                  </audio>
                                </section> 
                   }
               </AppConsumer>  
    }
} 
    
    export default AudioPlayer;