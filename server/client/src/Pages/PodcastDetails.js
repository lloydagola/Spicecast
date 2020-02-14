import React from 'react';
import {BASE_URL} from '../utils/api';

import PlaylistView from '../components/PlaylistView';
import PlaylistTable from '../components/PlaylistTable';

class PodcastDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            podcast : {}
        }
    }

    componentDidMount(){        

        fetch(`${BASE_URL}/api/podcasts/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(_podcast => {
            
            this.setState((prevState, props) => ({
                    ...prevState,
                    podcast : _podcast
                })
            );
            
            
        })
        .catch(error => console.log(error))

        

    }

    render(){
        

        let episodes =  this.state.podcast.episodes 
        ? this.state.podcast.episodes.map((episode, index) => <PlaylistView key={index} track={episode}/>) 
        : "loading...";

        

        return (
            <div>
                {episodes}
                <PlaylistTable/>
            </div>
        )
    }
}

export default PodcastDetails;
 