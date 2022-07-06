import React, { useContext } from 'react';
import './styles.css';
import { AudioContext } from '../../context/AudioContext';
import SingleAlbum from '../../components/SingleAlbum/SingleAlbum';

const renderAlbums = (albums = [], start=0, end=-1) => albums.length < 1
    ?"No albums..."
    :albums.map((album, index) => <SingleAlbum key={index} album={album}/>)



const AlbumGrid = props => {
    const {albums} = useContext(AudioContext)

    return <section className ="album-grid">
                            <h2>{props.title}</h2>
                            <div className="album-grid-container">
                                {
                                    renderAlbums(albums, props.start, props.end)
                                }        
                            </div>
                        </section>
}
export default AlbumGrid;