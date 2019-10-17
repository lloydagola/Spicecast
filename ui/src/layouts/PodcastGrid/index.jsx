import React from 'react';
import './styles.css';
import SinglePodcast from '../../components/SinglePodcast';
import MainMenu from '../../components/MainMenu';

const renderPodcasts = podcasts => podcasts.length < 1
    ?"No podcasts..."
    :podcasts.map((podcast, index) => <SinglePodcast key={index} title={podcast.title} thumbnail={podcast.thumbnail} />)
    




const PodcastGrid = (props) => (
    <section className ="podcast-grid">       
        <MainMenu/>
        <div className="podcast-grid-container">
            {renderPodcasts(props.podcasts)}        
        </div>
    </section>
);

export default PodcastGrid;