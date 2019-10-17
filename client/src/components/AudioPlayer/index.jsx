import React from 'react';
import './styles.css';

const AudioPlayer = (props) => <section id="audio-player">
                                    <div className="audio-details">
                                        <h4>
                                            1.{props.audioState.nowPlaying.title} - {props.audioState.nowPlaying.hosts.map(host => host)}
                                        </h4>
                                    </div>
                                    <audio
                                    controls
                                    src="/media/examples/t-rex-roar.mp3">
                                        Your browser does not support the
                                        <code>audio</code> element.
                                    </audio>
                                </section> 

export default AudioPlayer;