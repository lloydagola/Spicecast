import React from 'react';
import './App.css';
import {AppProvider} from './context';
import Hero from './layouts/Hero';
import PodcastGrid from './layouts/PodcastGrid';
import AudioPlayer from './components/AudioPlayer';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      audioState : {
        playing : false,
        nowPlaying:{
          title : "Piss Poss",
          podcast: {
            "_id": "5d709cd63eb0e22750940d2d",
            "title": "Nostra"
        },
          length:4.5,
          time:0.0
        },
        playlistIsHidden : true,
        playlist : []
      },
      podcasts:[],
      playTrack: this.playTrack
    }
  };

  playTrack(track){
    /*
    this.setState(
      {
        audioState:{
          ...this.state.audioState,
          playing:true,
          nowPlaying:track
        }
      }
    )
    */
   console.log("Now playing ", track.title);
   
  }

  fetchPodcasts(url = "http://localhost:3000/podcasts") {
    fetch(url)
        .then(res => res.json()
        )
        .then(data => this.setState({podcasts:data})
        )   
        .catch(error => console.log("error", error))    
  }
  

  componentDidMount(){ 
    this.fetchPodcasts();    
  }

  render(){      
    return (
      <div className="App">
        <AppProvider value={{...this.state}}>
          <Hero/>
          <PodcastGrid/>
          <AudioPlayer />
        </AppProvider>
      </div>
    );
  }
}

export default App;
