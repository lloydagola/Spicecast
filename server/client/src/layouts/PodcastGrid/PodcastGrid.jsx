import React, { useContext, useEffect } from 'react';
import './styles.css';
import {AppConsumer} from '../../context/AudioContext';
import SinglePodcast from '../../components/SinglePodcast/SinglePodcast';
import { AudioContext, AudioProvider } from '../../context/AudioContext';

const renderPodcasts = (podcasts = [], start=0, end=-1) => podcasts.length < 1
    ?"No podcasts..."
    :podcasts.slice(start, end).map((podcast, index) => <SinglePodcast key={index} podcast={podcast}/>)




const PodcastGrid = (props) => {

    const {podcasts} = useContext(AudioContext)

    return <section className ="podcast-grid">
                    <h2>{props.title}</h2>
                    <div className="podcast-grid-container">
                        {renderPodcasts(podcasts, props.start, props.end)}        
                    </div>
                </section>
}
        

export default PodcastGrid;