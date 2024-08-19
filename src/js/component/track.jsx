import React, { useState } from 'react';

export default function Track({ index, track, numberOfTracks, currentSongIndex, setCurrentTrack }) {
    const [backgroundColor, setBackgroundColor] = useState('bg-black');
    const [textColor, setTextColor] = useState('text-secondary');

    function handleOnMouseEnter() {
        setBackgroundColor('bg-dark');
        setTextColor('text-white');
    }

    function handleOnMouseLeave() {
        setBackgroundColor('bg-black');
        setTextColor('text-secondary');
    }

    return (
        <li
            className={`list-group-item ${backgroundColor} ${index === currentSongIndex ? 'text-success' : textColor} border border-0 ${index === 1 ? 'mt-5' : ''} ${index === numberOfTracks ? 'mb-5' : ''}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={() => setCurrentTrack(index)}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 d-flex justify-content-end">
                        {index === currentSongIndex ? <i className="fa-solid fa-chart-simple" /> : index}
                    </div>
                    <div className="col-1" />
                    <div className="col-4">
                        {track.name}
                    </div>
                    <div className="col-3">
                        {track.album}
                    </div>
                    <div className="col-3">
                        {track.category}
                    </div>
                </div>
            </div>
        </li>
    );
}
