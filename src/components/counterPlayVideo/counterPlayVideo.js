import React from "react";
import YouTube from "react-youtube";
import Counter from "components/counter/counter";
import "./counterPlayVideo.sass";

export default function CounterPlayVideo({ selectedVideo }) {

    const opts = {
        height: "220",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <section className="section-body">
            <div className="section-body-title">
                <h2>Faltan</h2>
            </div>
            <Counter />

            <div className="section-body-video">
                <div className="video">
                    {selectedVideo
                        ? <YouTube videoId={selectedVideo} opts={opts} />
                        : <YouTube videoId={"mAinJyxqrBY"} opts={opts} />
                    }
                </div>
            </div>
        </section>
    )
}