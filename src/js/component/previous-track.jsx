import React, { useState } from 'react';

export default function PreviousTrack({ numberOfTracks, currentSongIndex, setCurrentTrack }) {
    const [textColor, setTextColor] = useState('text-secondary');

    function handleOnMouseEnter() {
        setTextColor('text-white');
    }

    function handleOnMouseLeave() {
        setTextColor('text-secondary');
    }

    function handleOnClick() {
        if (currentSongIndex === undefined) {
            return;
        }
        setCurrentTrack((currentSongIndex - 1 + numberOfTracks) % numberOfTracks);
    }

    return (
        <div className="col-1">
            <i
                className={`fa-solid fa-backward-step ${textColor}`}
                disabled={numberOfTracks === 0}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onClick={handleOnClick}
            />
        </div>
    );
}