import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';
import SingleAlbum from '../../components/SingleAlbum';

const renderAlbums = (albums, start=0, end=-1) => albums.length < 1
    ?"No albums..."
    :albums.map((album, index) => <SingleAlbum key={index} album={album}/>)
    




const AlbumGrid = (props) => (
    <AppConsumer>
        { 
            state =>   <section className ="album-grid">
                            <h2>{props.title}</h2>
                            <div className="album-grid-container">
                                {
                                    renderAlbums(state.albums, props.start, props.end)
                                }        
                            </div>
                        </section>
        }
    </AppConsumer>
    
);

export default AlbumGrid;