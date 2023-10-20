import React, { useState, useEffect } from "react";
import "./counter.sass";


export default function Counter() {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const countdownDate = new Date("2024-08-30T00:00:00").getTime();
    // const countdownDate = new Date("2023-10-18T23:54:00").getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeDifference = countdownDate - now;

            if (timeDifference <= 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { days, hours, minutes, seconds } = countdown;


    return (
        <div className="counter">
            <div className="counter-element">
                <p className="p-time">{days}</p>
                <p className="p-title">Días</p>
            </div>

            <div className="counter-element">
                <p className="p-time">{hours}</p>
                <p className="p-title">Hrs</p>
            </div>

            <div className="counter-element">
                <p className="p-time">{minutes}</p>
                <p className="p-title">Min.</p>
            </div>

            <div className="counter-element">
                <p className="p-time">{seconds}</p>
                <p className="p-title">Seg</p>
            </div>
        </div>
    )
}
