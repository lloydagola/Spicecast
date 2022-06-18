import React, {useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import {AppProvider, AudioProvider} from './context/AudioContext';
import MainMenu from './components/MainMenu';
import AudioPlayer from './components/AudioPlayer/AudioPlayer.jsx';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Feed from "./Pages/Feed";
import PodcastDetails from "./Pages/PodcastDetails";
import AlbumDetails from "./Pages/AlbumDetails";
import {BASE_URL} from './utils/api';

class ClassApp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      audioState : {
        playState : "loaded",
        nowPlaying:{
          title: "What is",
          path: "audio/default.mp3",
          _id: "5daff1899a645939c0471689",
          parent: {
              _id: "5d709cd63eb0e22750940d2d",
              title: "Brexit",
              thumbnail: `images/no-image.jpg`,
          }
        },
        playlistIsHidden : false,
        playlist : []
      },
      podcasts:[],
      albums: [],
      playTrack: track => {               
        
        if (track.title == this.state.audioState.nowPlaying.title && this.state.audioState.playState == "playing"){
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
          console.log("playing track", this.state.audioState);
          
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
      stopTrack: () => {  
        console.log("stopping...");
         
        this.setState({
          ...this.state,
          audioState : {
            ...this.state.audioState, 
            playState:'stopped'
          }
        });             
        
      },
      toggleTrack: () => {  
        if(this.state.audioState.playState === "playing"){
          this.setState(
            {
              ...this.state,
              audioState:{   
                ...this.state.audioState,           
                playState:'paused'
              }
            }
          )  
        }else{
          this.setState(
            {
              ...this.state,
              audioState:{   
                ...this.state.audioState,           
                playState:'playing'
              }
            }
          )  
        }
      }
      
  }
    
  };

  fetchPodcasts(url = `${BASE_URL}/api/podcasts`) {
    fetch(url)
    .then(res => res.json()
    )
    .then(podcasts => this.setState({podcasts})
    )   
    .catch(error => console.log("error", error));    
  }

  fetchAlbums(url = `${BASE_URL}/api/albums`){
    console.log("url:",url);
    
    fetch(url)
    .then(res => res.json())
    .then(albums => this.setState({...this.state, albums}))
    .catch(error => console.log("error", error));
  }
  

  componentDidMount(){ 
    this.fetchPodcasts(); 
    this.fetchAlbums(); 
    console.log("audio state:", this.state);   
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
                      <Route exact path="/albums/:id" component={AlbumDetails}/> 
                      <Route exact path="/">
                        <Feed/>
                      </Route>
                      <Route render={() => <div><h2>Not found...</h2></div>} />
                    </Switch>  
                    
                  </div>                  
                  <SidebarRight/>  
                </div>
                <AudioPlayer audioState={this.state.audioState} toggleTrack={this.state.toggleTrack} stopTrack={this.state.stopTrack}/>
              </Router>
          </div>
        </AppProvider>
    );
  }
}

const App = () => {


  
  
   
  return (
      <AppProvider>
        <AudioProvider>
          <div className="App">
              <Router> 
                <MainMenu/>
                <div className="main">
                  <SidebarLeft/>        
                  <div className = "main-content">  
                    <Switch>
                      <Route exact path="/podcasts/:id" component={PodcastDetails}/> 
                      <Route exact path="/albums/:id" component={AlbumDetails}/> 
                      <Route exact path="/">
                        <Feed/>
                      </Route>
                      <Route render={() => <div><h2>Not found...</h2></div>} />
                    </Switch>                      
                  </div>                  
                  <SidebarRight/>  
                </div>
                <AudioPlayer/>
              </Router>
          </div>
        </AudioProvider>
      </AppProvider>
  );
  
}

export default App;
