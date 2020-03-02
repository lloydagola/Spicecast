import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';
import {BASE_URL} from '../../utils/api';

class AudioPlayer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentTime:'00:00',
            trackDuration : '00:00',
            value : 0
        }

        this.progressBar = React.createRef();

        this.seek = this.seek.bind(this);
        
    }

    componentDidMount(){  
        this.player.onloadedmetadata = () => this.setState(
            {
                ...this.state, 
                trackDuration:this.calculateTotalValue(this.player.duration.toFixed(0))
            }
        );                 
        this.player.ontimeupdate = e => this.setState(
                {
                    ...this.state,
                    currentTime: this.calculateCurrentValue(e.srcElement.currentTime),
                    value: this.updateProgressBar()
                }
            );
        

        //this.player.addEventListener("timeupdate", e =>  this.setState({...this.state, currentTime: this.calculateCurrentValue(e.srcElement.currentTime)}));
        //this.player.addEventListener("timeupdate", e =>  console.log("timing...", this.calculateCurrentValue(e.srcElement.currentTime)));
        
    }
    
    componentDidUpdate(prevProps, prevstate) {  
              
        //if someone selects a new song
        if(this.props.audioState.nowPlaying.title !== prevProps.audioState.nowPlaying.title && this.props.audioState.playState === 'playing'){
            this.player.load();
            this.player.play();            
        }
        //if someone pauses a song
        else if(this.props.audioState.playState === 'paused'){
            this.player.pause();            
        }
        //if someone resumes a previously paused track
        else if(this.props.audioState.nowPlaying.title === prevProps.audioState.nowPlaying.title && this.props.audioState.playState === "playing" && prevProps.audioState.playState === "paused"){                      
            this.player.play();
        }
       
        //if someone restarts the same track
        else if(this.props.audioState.nowPlaying.title === prevProps.audioState.nowPlaying.title && this.props.audioState.playState === "playing" && prevProps.audioState.playState === "stopped"){
            this.player.load();
            this.player.play();
        }
        //if someone resumes a stopped track
        else if(prevProps.audioState.playState === "stopped" && prevProps.audioState.playState === "playing"){            
            this.player.play();
        }
        else{
            return;
        }
    }

    togglePlayState = toggleTrack => {
        toggleTrack();

        if (this.player.paused === false) {
            this.player.pause();
            console.log("toggle pause");
            
        }
        else {
            this.player.play();            
            console.log("toggle play");
        }
        
    }

    stopTrack = stopTrack => {
        this.player.load();
        stopTrack();
    }

    togglePlayButton = playState => playState === 'playing' ? 'fas fa-pause pause-icon' : 'far fa-play-circle play-icon'

    calculateTotalValue(trackDuration) {
        var minutes = Math.floor( trackDuration / 60),
          seconds_int = this.player.duration - minutes * 60,
          seconds_str = seconds_int.toString(),
          seconds = seconds_str.substr(0, 2),
          time = minutes + ':' + seconds        
          
      
        return time;
    }
      
    calculateCurrentValue(currentTime) {
        var current_hour = parseInt(currentTime / 3600) % 24,
          current_minute = parseInt(currentTime / 60) % 60,
          current_seconds_long = currentTime % 60,
          current_seconds = current_seconds_long.toFixed(),
          current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
                
        return current_time;
    }

    updateProgressBar = () => this.player.currentTime / this.player.duration;
      
    initProgressBar() {        
              
        // var progressbar = document.getElementById('seek-obj');
    
        // console.log("player.currentTime / player.duration", player.currentTime / player.duration);
        
    
        // progressbar.value = (player.currentTime / player.duration);
        // progressbar.addEventListener("click", seek);
      
      
        // function seek(evt) {
        //   var percent = evt.offsetX / this.offsetWidth;
        //   player.currentTime = percent * player.duration;
        //   progressbar.value = percent / 100;
        // }
    };

    seek(evt){
        const percent = evt.nativeEvent.offsetX / this.progressBar.current.offsetWidth;
        console.log("seeking", evt.nativeEvent.offsetX);
        console.log("offsetWidth", this.progressBar.current.offsetWidth);
        console.log("percent", this.progressBar.value);
        
        this.player.currentTime = percent * this.player.duration;
        this.state.value = percent / 100;
     }
       
                    
    

    render(){
        

        return <AppConsumer>
                    {
                    state => <section id="audio-player" className="audio-player">   
                            <audio
                                ref={ref => this.player = ref}>
                                    Your browser does not support the
                                    <code>audio</code> element.
                                    <source src={`${BASE_URL}/${state.audioState.nowPlaying.path}`} type="audio/mpeg"/>
                            </audio>
                            <img src={`${BASE_URL}/${state.audioState.nowPlaying.podcast.thumbnail}`}/>
                            <div className="audio-title">
                                <h4>{state.audioState.nowPlaying.podcast.title} - {state.audioState.nowPlaying.title}</h4>
                            </div>
                            <div className="player-controls">
                                <i className={this.togglePlayButton(state.audioState.playState)} onClick={() => this.togglePlayState(this.props.toggleTrack)}/>
                                <i className="fas fa-backward"/>
                                <i className="fas fa-stop" onClick={() => this.stopTrack(state.stopTrack)}/>
                                <i className="fas fa-forward"/>
                            </div>
                            <p>{this.state.currentTime}</p>
                            <progress ref={this.progressBar} id="seek-obj" value={this.state.value || 0} max="1" onClick={this.seek}/>        
                            <p>{this.state.trackDuration}</p>
                        </section> 
                    }                    
               </AppConsumer> 
    }
} 
    
    export default AudioPlayer;



