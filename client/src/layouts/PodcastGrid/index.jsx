import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';
import SinglePodcast from '../../components/SinglePodcast';

const renderPodcasts = podcasts => podcasts.length < 1
    ?"No podcasts..."
    :podcasts.map((podcast, index) => <SinglePodcast key={index} title={podcast.title} hosts={podcast.hosts} thumbnail={podcast.thumbnail} episodes={podcast.episodes}/>)
    




const PodcastGrid = (props) => (
    <AppConsumer>
        { 
            state =>   <section className ="podcast-grid">
                                <div className="podcast-grid-container">
                                    {renderPodcasts(state.podcasts)}        
                                </div>
                            </section>
        }
    </AppConsumer>
    
);

export default PodcastGrid;