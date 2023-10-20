import React from "react";
import "./videoList.sass";


export default function VideoList({ playVideo, selectedVideo }) {

    let video1 = "=mAinJyxqrBY";
    let video2 = "gVUs4oFKJmY";
    let video3 = "aQLDxUY_wjs";
    let video4 = "qBe17SnzI2s";

    return (
        <section className="section-videos">
            <div className="section-videos-title">
                <h2>Claro Sports en sochi 2014</h2>
            </div>

            <div className="section-videos-content">

                {selectedVideo === video1 || selectedVideo === null
                    ? <div className="section-videos-content-video-selected">
                        <div className="video-selected-red">
                            <p>Los deportistas latinoamericanos que participan en soshi 2014</p>
                        </div>
                        <h4>Team Latam</h4>
                    </div>
                    : <div className="section-videos-content-video">
                        <img src="/img/team-latam.png" alt="img-team-latam" onClick={() => playVideo(video1)}></img>
                        <h4>Team Latam</h4>
                    </div>
                }

                {selectedVideo === video2
                    ? <div className="section-videos-content-video-selected">
                        <div className="video-selected-red">
                            <p>Los deportistas latinoamericanos que participan en soshi 2014</p>
                        </div>
                        <h4>Team Latam</h4>
                    </div>
                    : <div className="section-videos-content-video">
                        <img src="/img/travel-meets-fashion.png" alt="img-travel-meets-fashion" onClick={() => playVideo(video2)}></img>
                        <h4>Travel meets fashion</h4>
                    </div>
                }

                {selectedVideo === video3
                    ? <div className="section-videos-content-video-selected">
                        <div className="video-selected-red">
                            <p>Los deportistas latinoamericanos que participan en Soshi 2014</p>
                        </div>
                        <h4>Team Latam</h4>
                    </div>
                    : <div className="section-videos-content-video">
                        <img src="/img/velocidad-riesgo.png" alt="img-velocidad-riesgo" onClick={() => playVideo(video3)}></img>
                        <h4>Velocidad y riesgo</h4>
                    </div>
                }

                {selectedVideo === video4
                    ? <div className="section-videos-content-video-selected">
                        <div className="video-selected-red">
                            <p>Los deportistas latinoamericanos que participan en soshi 2014</p>
                        </div>
                        <h4>Team Latam</h4>
                    </div>
                    : <div className="section-videos-content-video">
                        <img src="/img/experiencia.png" alt="img-experiencia-multimedia" onClick={() => playVideo(video4)}></img>
                        <h4>Experiencia multimedia</h4>
                    </div>
                }
            </div>
        </section>

    )
}