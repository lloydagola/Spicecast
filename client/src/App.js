import React from 'react';
import './App.css';
import {AppProvider} from './context';
import MainMenu from './components/MainMenu';
import Hero from './layouts/Hero';
import PodcastGrid from './layouts/PodcastGrid';
import AudioPlayer from './components/AudioPlayer';
import Footer from './layouts/Footer';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      audioState : {
        playing : false,
        nowPlaying:{
          title: "What is",
          path: "https://emp.bbc.co.uk/0066df6d-3f70-4809-88f9-653ecfe6a64d",
          thumbnail: "http://localhost:3000/images/no-image.png",
          _id: "5daff1899a645939c0471689",
          podcast: {
              _id: "5d709cd63eb0e22750940d2d",
              title: "Brexit"
          }
      },
        playlistIsHidden : false,
        playlist : []
      },
      podcasts:[],
      playTrack: track =>{ 
        if (track.title == this.state.audioState.nowPlaying.title && this.state.audioState.playing){
          console.log("pausing ", track.title);
          this.setState({
            ...this.state,
            audioState : {
              ...this.state.audioState, 
              playing:false
            }
          });
          
        }
        else{
          this.setState(
            {
              ...this.state,
              audioState:{   
                ...this.state.audioState,           
                playing:true,
                nowPlaying:track
              }
            }
          )
        }
      },
      stopTrack: track => this.setState({}),
      pauseTrack: track => this.setState({}),
      nextTrack: () => this.setState({}),
      previousTrack: () => this.setState({})
      
    }

    
  };

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
          <MainMenu/>
          <Hero/>
          <PodcastGrid/>
          <AudioPlayer playing={this.state.audioState.playing} />
          <Footer />
        </AppProvider>
      </div>
    );
  }
}

export default App;
