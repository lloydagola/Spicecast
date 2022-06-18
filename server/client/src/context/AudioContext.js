import React, {createContext, useState, useEffect} from 'react';
import {BASE_URL} from '../utils/api';

export const AppContext = createContext({});
export const AudioContext = createContext({});

export const AppProvider = ({children}) => {

    return <AppContext.Provider>{children}</AppContext.Provider>
}

export const AudioProvider = ({children}) => {
    
  const [audioState, setAudioState] = useState({
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
  })
  const [albums, setAlbums] = useState([])
  const [podcasts, setPodcasts] = useState([])

  

  async function fetchData(url = `${BASE_URL}/api/albums`){        
      const res = await fetch(url)
      const json = await res.json()
      return json
  }

  useEffect(() => { 
    (async function loadData(){

      try{ 
        const albs = await fetchData(`${BASE_URL}/api/albums`); 
        const pods = await fetchData(`${BASE_URL}/api/podcasts`);
        
        setAlbums(albs);
        setPodcasts(pods);
        
      }
      catch(e){
        console.log('an error occurred in App', e)
      }
    })()
  }, [])


  const playTrack = track => {               
        
    if (track.title === audioState.nowPlaying.title && audioState.playState == "playing"){
      console.log("pausing track");
      
      setAudioState({
          ...audioState, 
          playState:'paused'        
      }); 
      return         
    }
    else{
      console.log("playing track", audioState);
      
      setAudioState({   
        ...audioState,           
        playState:'playing',
        nowPlaying:track
    });
    return
    }
  }
  const stopTrack = () => {  
    console.log("stopping...");
     
    setAudioState({
        ...audioState, 
        playState:'stopped'      
    });  
    
  }
  const toggleTrack = () => {  
    if(audioState.playState === "playing"){
      setAudioState({  
            ...audioState,           
            playState:'paused'
        })  
    }else{
      setAudioState({   
            ...audioState,           
            playState:'playing'         
        })  
    }
  }
  

    return <AudioContext.Provider value={{audioState, playTrack,stopTrack, toggleTrack, podcasts, albums}}>
        {children}
    </AudioContext.Provider>
};

