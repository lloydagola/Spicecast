import React from "react"
import "./style.css"





const SinglePodcast = (props) => {
        return <div className="single-podcast">
                    <div className="image-view">
                       <img src={props.thumbnail} alt={`${props.title} podcast thumbnail`}/>
                       <div className = "podcast-text">
                           <h2>{props.title.toUpperCase()}</h2>
                           <h5>POSS PISS | POSS PISS</h5>
                           <div className="podcast-horizontal-line"/>
                        </div>              
                    </div>
                    <div className="playlist-view">
                        <div className="podcast-play">
                            <i className="far fa-play-circle"/> adfkdsghkl                        
                        </div>  
                        <div className="podcast-play">
                            <i className="far fa-play-circle"/> adfkdsghkl                        
                        </div>  
                        <div className="podcast-play">
                            <i className="far fa-play-circle"/> adfkdsghkl                        
                        </div>  
                    </div>                   
                    
                </div>
        

}

export default SinglePodcast;