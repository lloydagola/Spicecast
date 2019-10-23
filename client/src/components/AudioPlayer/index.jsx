import React from 'react';
import './styles.css';
import {AppConsumer} from '../../context';

const AudioPlayer = props => <AppConsumer>
                                { 
                                    state => <section id="audio-player">
                                               <div className="audio-details">
                                                   <h4>
                                                       1.{state.audioState.nowPlaying.podcast.title} - {state.audioState.nowPlaying.title}
                                                   </h4>
                                               </div>
                                               <audio
                                               controls
                                               src="/media/examples/t-rex-roar.mp3">
                                                   Your browser does not support the
                                                   <code>audio</code> element.
                                               </audio>
                                             </section> 
                                }
                            </AppConsumer>

export default AudioPlayer;