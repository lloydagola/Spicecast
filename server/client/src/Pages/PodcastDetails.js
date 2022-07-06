import React from 'react';
import {BASE_URL} from '../utils/api';

import ParentInfo from '../components/ParentInfo';
import PlaylistView from '../components/PlaylistView/PlaylistView';
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
        .then(podcast =>this.setState((prevState, props) => ({
                    ...prevState,
                    podcast
                }))     
        )
        .catch(error => console.log(error))
    }

    render(){        

        let episodes =  this.state.podcast.episodes 
        ? this.state.podcast.episodes.map((episode, index) => <PlaylistView key={index} track={episode}/>) 
        : "loading...";

        return (
            <div>
                <ParentInfo thumbnail={`${BASE_URL}/${this.state.podcast.thumbnail}`} contributors={this.state.podcast.hosts} title={this.state.podcast.title}/>
                <PlaylistTable items={this.state.podcast.episodes} contributors={this.state.podcast.hosts} parent={this.state.podcast}/>
            </div>
        )
    }
}

export default PodcastDetails;
 