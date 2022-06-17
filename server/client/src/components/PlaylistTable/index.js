import React from 'react';
import './styles.css';

const renderContributors = contributors => 
    contributors
    ?contributors.map((contributor, index) => index === contributors.length - 1 ? contributor.title : contributor.title + ", ")
    :"pen15"


    //if the user clicks an album track, display the artists name and track title in the media player
    //otherwise, display podcast title and track title
const setUpTrack = (track, artist) => ({ 
    ...track, parent : {...track.parent, title: artist}
})

const PlaylistTable = ({items, parent, contributors, album, playTrack}) => <div>
                        <table>
                            <tbody>
                                {
                                    items
                                    ?items.map(
                                        (item, index) => <tr key={index} onClick={() =>  album ? playTrack(setUpTrack({...item, parent}, contributors[0].title)) : playTrack({...item, parent})}><td>{item.title}</td><td>{renderContributors(contributors)}</td></tr>)
                                    : "loading..."
                                }
                            </tbody>
                        </table>            
                    </div>
export default PlaylistTable;
