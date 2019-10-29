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
          title: "B.Y.O.B",
          path: "http://localhost:3000/audio/bubbles.mp3",
          thumbnail: "http://localhost:3000/images/no-image.png",
          _id: "5daff1899a645939c0471689",
          podcast: {
              _id: "5d709cd63eb0e22750940d2d",
              title: "Nostra"
          }
      },
        playlistIsHidden : false,
        playlist : []
      },
      podcasts:[],
      playTrack: track => this.setState(
          {
            ...this.state,
            audioState:{   
              ...this.state.audioState,           
              playing:true,
              nowPlaying:track
            }
          }
      ),
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
          <AudioPlayer />
          <Footer />
        </AppProvider>
      </div>
    );
  }
}

export default App;
