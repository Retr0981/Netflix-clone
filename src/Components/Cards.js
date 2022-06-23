import React from 'react'
import './Cards.css'
function Cards() {
    return (
        <div className="cards-container">

            
            <div className="card-header">
                <div className="card-content">

                    <div className="card-text">
                        <h1>
                              Enjoy on your TV.

                        </h1>

                        <p>
                             Watch on smart TVs, PlayStation, Xbox,
                             Chromecast, Apple TV, Blu-ray players and more.
                        </p>
                     </div>

                    <div className="card-img">
                        <div className="img-plus-video">
                                <img src="./assets/tv.png" alt="" srcset="" />                   
                                <video muted={true} autoPlay={true} loop={true} src="../assets/show.m4v"></video>
                        </div>
                    </div>
 
                </div>
            </div>


            <div className="card-header">
                <div className="card-content">
                    <div className="card-img">
                        <img src="./assets/mobile.jpg"  alt="" srcset="" />
                        <div className="downloads">
                        <img src="./assets/boxshot.png" alt="" srcset="" />
                            <div className="downloads-desc">
                                <h4>Stranger Things</h4>
                                <h6>Downloading...</h6>
                            </div>

                            <div className="icon">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" srcset="" />
                            </div>
                    </div>
                    </div>
                   

                    <div className="card-text">
                        <h1>
                        Download your shows to watch offline.
                        </h1>

                        <p>
                        Save your favourites 
                        easily and always have something to watch.

                        </p>
                    </div>

                </div>
            </div>


            <div className="card-header">
                <div className="card-content">

                    
                     <div className="card-text">
                        <h1>
                           Watch Everywhere
                        </h1>

                        <p>
                        Stream unlimited movies and TV shows on your phone, 
                        tablet, laptop, and TV.
                        </p>
                     </div>


                    <div className="card-img"></div>
        
                </div>
            </div>


            <div className="card-header">
                <div className="card-content">
                    <div className="card-img">
                        <img src="./assets/kids.png" alt="" srcset="" />
                    </div>

                    <div className="card-text">
                        <h1>
                            Create Profiles for Kids.
                        </h1>

                        <p>
                        Send kids on adventures with their
                         favourite characters in a space made
                          just for them—free with your membership.
                        </p>
                    </div>

                </div>
            </div>


        

        </div>
    )
}

export default Cards
