import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';   

export default function PlaylistTable({episodes, podcast}) {
    console.log(episodes); 
    console.log(podcast); 
      
   
    return (
        <AppConsumer>
        {    
            state => <div>
                        <table>
                            <tbody>
                                {
                                    episodes
                                    ?episodes.map(
                                        (episode, index) => <tr key={index} onClick={() => state.playTrack({...episode, podcast:podcast})}><td>{episode.title}</td><td>BBC</td><td>{podcast.title}</td></tr>)
                                    : "loading..."
                                }
                            </tbody>
                        </table>            
                    </div>
        }
        </AppConsumer>
    )
}
