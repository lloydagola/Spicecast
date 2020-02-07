import React from 'react';
import './App.css';
import {AppProvider} from './context';
import MainMenu from './components/MainMenu';
import PodcastGrid from './layouts/PodcastGrid';
import AudioPlayer from './components/AudioPlayer';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import BASE_URL from './utils/api';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      audioState : {
        playing : false,
        nowPlaying:{
          title: "What is",
          path: "https://emp.bbc.co.uk/0066df6d-3f70-4809-88f9-653ecfe6a64d",
          thumbnail: `${BASE_URL}/images/no-image.png`,
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

  fetchPodcasts(url = `${BASE_URL}/podcasts`) {
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
        <AppProvider value={{...this.state}}>
          <div className="App">
              
              <MainMenu/>
              <div className="main">
                <SidebarLeft/>        
                <div className = "main-content">    
                  <PodcastGrid title={"Recommended for you"} start={0} end={12}/>
                  <PodcastGrid title={"Popular"} start={7} />
                </div>                  
                <SidebarRight/>   
                
                              
              </div>
              
              <AudioPlayer playing={this.state.audioState.playing} />
          </div>
        </AppProvider>
    );
  }
}

export default App;
