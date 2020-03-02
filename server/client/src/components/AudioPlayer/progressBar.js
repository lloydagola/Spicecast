import React from 'react';

const seek = evt => {
    //const percent = evt.nativeEvent.offsetX / this.offsetWidth;
    console.log("seeking", evt.nativeEvent.offsetX);
    
 //   this.player.currentTime = percent * this.player.duration;
 //     progressbar.value = percent / 100;
 }

const ProgressBar = props => <progress id="seek-obj" value={props.value || 0} max="1" onClick={seek}/>

export default ProgressBar;