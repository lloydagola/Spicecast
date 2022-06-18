import React from 'react';
import {BASE_URL} from '../utils/api';

import ParentInfo from '../components/ParentInfo';
import PlaylistView from '../components/PlaylistView/PlaylistView';
import PlaylistTable from '../components/PlaylistTable';

class AlbumDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            album : {}
        }
    }

    componentDidMount(){        

        fetch(`${BASE_URL}/api/albums/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(album =>this.setState((prevState, props) => ({
                    ...prevState,
                    album
                }))     
        )
        .catch(error => console.log(error))
    }

    render(){        

        const playlistTable =  this.state.album 
        ? <PlaylistTable items={this.state.album.tracks} contributors={this.state.album.contributingArtists} parent={this.state.album} album={true}/>
        : "loading...";  

        const parentInfo =  this.state.album 
        ? <ParentInfo thumbnail={`${BASE_URL}/${this.state.album.thumbnail}`} contributors={this.state.album.contributingArtists} title={this.state.album.title}/>
        : "loading...";       

        return (
            <div>                
                {parentInfo}
                {playlistTable}
            </div>
        )
    }
}

export default AlbumDetails;
 