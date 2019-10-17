import React from 'react';
import './App.css';
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
          hosts:["Poss Piss"],
          length:4.5,
          time:0.0
        },
        pen15:"pen15",
        playlistIsHidden : true,
        playlist : []
      },
      podcasts:[]
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

    console.log('componentDidMount');
    this.fetchPodcasts();
    
  }

  render(){  
    console.log(this.state);
    
    return (
      <div className="App">
        
        <Hero/>
        <PodcastGrid podcasts={this.state.podcasts}/>
        <AudioPlayer audioState={this.state.audioState} />
      </div>
    );
  }
}

export default App;
