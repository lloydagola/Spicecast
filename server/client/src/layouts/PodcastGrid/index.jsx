import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';
import SinglePodcast from '../../components/SinglePodcast';

const renderPodcasts = (podcasts, start=0, end=-1) => podcasts.length < 1
    ?"No podcasts..."
    :podcasts.slice(start, end).map((podcast, index) => <SinglePodcast key={index} title={podcast.title} hosts={podcast.hosts} thumbnail={podcast.thumbnail} episodes={podcast.episodes}/>)
    




const PodcastGrid = (props) => (
    <AppConsumer>
        { 
            state =>   <section className ="podcast-grid">
                            <h2>{props.title}</h2>
                            <div className="podcast-grid-container">
                                {renderPodcasts(state.podcasts, props.start, props.end)}        
                            </div>
                        </section>
        }
    </AppConsumer>
    
);

export default PodcastGrid;