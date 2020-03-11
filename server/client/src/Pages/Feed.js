import React from 'react';
import PodcastGrid from '../layouts/PodcastGrid';
import AlbumGrid from '../layouts/AlbumGrid';

export default function Feed() {
    return (
        <>
            <PodcastGrid title={"Recommended for you"} start={0} end={12}/>
            <AlbumGrid title={"New Albums"}/>            
            <PodcastGrid title={"Popular"} start={12} />            
        </>
    )
}
