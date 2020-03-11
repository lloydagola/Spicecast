import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';   

const renderContributors = contributors => 
    contributors
    ?contributors.map((contributor, index) => index === contributors.length - 1 ? contributor.title : contributor.title + ", ")
    :"pen15"


    //if the user clicks an album track, display the artists name and track title in the media player
    //otherwise, display podcast title and track title
const setUpTrack = (track, artist) => ({ 
    ...track, parent : {...track.parent, title: artist}
})

const PlaylistTable = ({items, parent, contributors, album}) => 
        <AppConsumer>
        {    
            state => <div>
                        <table>
                            <tbody>
                                {
                                    items
                                    ?items.map(
                                        (item, index) => <tr key={index} onClick={() =>  album ? state.playTrack(setUpTrack({...item, parent}, contributors[0].title)) : state.playTrack({...item, parent})}><td>{item.title}</td><td>{renderContributors(contributors)}</td></tr>)
                                    : "loading..."
                                }
                            </tbody>
                        </table>            
                    </div>
        }
        </AppConsumer>

export default PlaylistTable;
