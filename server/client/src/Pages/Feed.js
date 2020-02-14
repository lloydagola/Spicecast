import React from 'react';
import PodcastGrid from '../layouts/PodcastGrid';

export default function Feed() {
    return (
        <>
            <PodcastGrid title={"Recommended for you"} start={0} end={12}/>
            <PodcastGrid title={"Popular"} start={7} />            
        </>
    )
}
