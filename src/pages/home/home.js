import React, { useState } from "react";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import VideoList from "components/videoList/videoList";
import CounterPlayVideo from "components/counterPlayVideo/counterPlayVideo";
import "./home.sass";


export default function HomePage() {

    const [selectedVideo, setSelectedVideo] = useState(null);

    const playVideo = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="principal">
            <Header />

            <CounterPlayVideo selectedVideo={selectedVideo} />

            <VideoList playVideo={playVideo} selectedVideo={selectedVideo} />

            <Footer />
        </div>
    )
}
