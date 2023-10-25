import React from "react";

const Wave = ({ gradientId, stopColor1, stopColor2 }) => {
    return (
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
                <linearGradient id={gradientId} x1="15%" y1="40%" x2="95%" y2="0%">
                    <stop offset="0%" style={{ stopColor: stopColor1 }} />
                    <stop offset="60%" style={{ stopColor: stopColor2 }} />
                </linearGradient>
            </defs>
            <path fill={`url(#${gradientId})`} fillOpacity="1"
                d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,144C672,171,768,213,864,234.7C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    )
};

export default Wave;