import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import {AppProvider} from './context';
import MainMenu from './components/MainMenu';
import AudioPlayer from './components/AudioPlayer';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Feed from "./Pages/Feed";
import PodcastDetails from "./Pages/PodcastDetails";
import {BASE_URL} from './utils/api';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      audioState : {
        playState : "stopped",
        nowPlaying:{
          title: "What is",
          path: "audio/Brexitcast/Brexitcast-20191025-BrexitcastGoesGLOBAL.mp3",
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
      playTrack: track => {               
        
        if (track.title == this.state.audioState.nowPlaying.title && this.state.audioState.playState != "paused"){
          console.log("pausing track");
          
          this.setState({
            ...this.state,
            audioState : {
              ...this.state.audioState, 
              playState:'paused'
            }
          });
          
        }
        else{
          console.log("playing track");
          
          this.setState(
            {
              ...this.state,
              audioState:{   
                ...this.state.audioState,           
                playState:'playing',
                nowPlaying:track
              }
            }
          )
        }
      },
      resumeTrack: () => {   
        console.log("resuming track");
              
        this.setState(
          {
            ...this.state,
            audioState:{   
              ...this.state.audioState,           
              playState:'playing'
            }
          }
        )
      },
      stopTrack: track => this.setState({}),
      pauseTrack: track => this.setState({
        ...this.state,
        audioState:{   
          ...this.state.audioState,           
          playState:'paused'
        }
      }),
      nextTrack: () => this.setState({}),
      previousTrack: () => this.setState({})
      
    }

    
  };

  fetchPodcasts(url = `${BASE_URL}/api/podcasts`) {
    fetch(url)
        .then(res => res.json()
        )
        .then(data => this.setState({podcasts:data})
        )   
        .catch(error => console.log("error", error))    
  }
  

  componentDidMount(){ 
    this.fetchPodcasts(); 
    console.log("audio state:", this.state.audioState.playState);   
  }

  render(){      
    return (
        <AppProvider value={{...this.state}}>
          <div className="App">
              <Router> 
                <MainMenu/>
                <div className="main">
                  <SidebarLeft/>        
                  <div className = "main-content">  
                    <Switch>
                      <Route exact path="/podcasts/:id" component={PodcastDetails}/> 
                      <Route exact path="/">
                        <Feed/>
                      </Route> 
                    </Switch>  
                    
                  </div>                  
                  <SidebarRight/>  
                </div>
                <AudioPlayer playState={this.state.audioState.playState} pause={this.state.pauseTrack} resume={this.state.resumeTrack}/>
              </Router>
          </div>
        </AppProvider>
    );
  }
}

export default App;
