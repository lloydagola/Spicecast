import React from 'react';
import PodcastGrid from '../layouts/PodcastGrid/PodcastGrid';
import AlbumGrid from '../layouts/AlbumGrid/AlbumGrid';

export default function Feed() {
    return (
        <>
            <PodcastGrid title={"Recommended podcasts"} start={0} end={12}/>
            <AlbumGrid title={"Recommended Albums"}/>            
            <PodcastGrid title={"Popular"} start={12} />            
            <AlbumGrid title={"New Albums"}/>            
        </>
    )
}
