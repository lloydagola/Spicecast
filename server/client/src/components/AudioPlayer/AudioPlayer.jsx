import React, { useContext, useRef, useState, useEffect } from 'react';
import './styles.css';
import {BASE_URL} from '../../utils/api';
import {AudioContext} from '../../context/AudioContext'

const AudioPlayer = props => {
    const {audioState, togglePlayState, toggleTrack, stopTrack} = useContext(AudioContext)

    const [value, setValue] = useState(0)
    const [currentTime, setCurrentTime] = useState('00:00')
    const [trackDuration, setTrackDuration] = useState(0)
    
    const calculateTotalValue = (trackDuration) => {
        var minutes = Math.floor( trackDuration / 60),
          seconds_int = player.current.duration - minutes * 60,
          seconds_str = seconds_int < 10 ? '0' + seconds_int.toString() : seconds_int.toString(),
          seconds = seconds_str.substr(0, 2),
          time = minutes + ':' + seconds        
          
      
        return time;
    }
      
    const calculateCurrentValue = (currentTime) => {
        var current_hour = parseInt(currentTime / 3600) % 24,
          current_minute = parseInt(currentTime / 60) % 60,
          current_seconds_long = currentTime % 60,
          current_seconds = current_seconds_long.toFixed(),
          current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
                
        return current_time;
    }

    const togglePlayButton = playState => playState === 'playing' ? 'fas fa-pause pause-icon' : 'far fa-play-circle play-icon'
    
    const seek = (evt) => {
        const percent = evt.nativeEvent.offsetX / progressBarRef.current.offsetWidth;
        console.log("seeking", evt.nativeEvent.offsetX);
        console.log("offsetWidth");
        console.log("percent");
        
        player.current.currentTime = percent * player.current.duration;
        setValue(percent / 100);
    }

    const updateProgressBar = () => player.current.currentTime / player.current.duration;
      
    const initProgressBar = () => {        
              
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

    const handlePlay = toggleTrack => {

        toggleTrack()
        if (player.current.paused === false) {
            player.current.pause();
            console.log("toggle pause");
            
        }
        else {
            player.current.play();            
            console.log("toggle play");
        }
    }

    const handleStop = stopTrack => {
        setValue(0)
        stopTrack();
    }

    const player = useRef(null)
    const progressBarRef = useRef(null)

    useEffect(() => {
        player.current.onloadedmetadata = () => setTrackDuration(calculateTotalValue(player.current.duration.toFixed(0)));                 
        player.current.ontimeupdate = e => {
                setCurrentTime(calculateCurrentValue(e.srcElement.currentTime))
                setValue(updateProgressBar())
            }
    }, [])

    useEffect(() => {    
        //if someone selects a new song
        player.current.load();
        player.current.play(); 

        console.log(audioState);

    }, [audioState.nowPlaying.path])

    useEffect(() => {

        switch(audioState.playState){
            case 'paused':
                player.current.pause();
                break
            //if someone resumes a previously paused track
            case "playing":                      
                player.current.play();  
                break
            //if someone resumes a stopped track
            case "stopped":            
                player.current.load();
                break
            
            default:
                player.current.play(); 
        } 
        

    }, [audioState.playState])


    

    return <section id="audio-player" className="audio-player">   
                <audio ref={player}>
                    Your browser does not support the
                    <code>audio</code> element.
                    <source src={`${BASE_URL}/${audioState.nowPlaying.path}`} type="audio/mpeg"/>
                    <source src="http://localhost:4000/music/Xilent/we are dust/01 From Dust.mp3" type="audio/mpeg"/>
                </audio>
                <img src={`${BASE_URL}/${audioState.nowPlaying.parent.thumbnail}`}/>
                <div className="audio-title">
                    <h4>{audioState.nowPlaying.parent.title} - {audioState.nowPlaying.title}</h4>
                </div>
                <div className="player-controls">
                    <i className={togglePlayButton(audioState.playState)} onClick={() => handlePlay(toggleTrack)}/>
                    <i className="fas fa-backward"/>
                    <i className="fas fa-stop" onClick={() => handleStop(stopTrack)}/>
                    <i className="fas fa-forward"/>
                </div>
                <p>{currentTime}</p>
                <progress id="seek-obj" value={value} max="1" onClick={seek} ref={progressBarRef}/>        
                <p>{trackDuration}</p>
            </section> 

}

export default AudioPlayer;



