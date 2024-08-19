import React, { useState } from 'react';

export default function TooglePlay({ numberOfTracks, audioRef, playing, setPlaying }) {
    const [textColor, setTextColor] = useState('text-secondary');

    function handleOnMouseEnter() {
        setTextColor('text-white');
    }

    function handleOnMouseLeave() {
        setTextColor('text-secondary');
    }

    function handleOnClick() {
        if (audioRef.current.src === '') {
            return;
        }

        if (audioRef.current.paused) {
            audioRef.current.play();
            setPlaying(true);
        } else {
            audioRef.current.pause();
            setPlaying(false);
        }
    }

    return (
        <div className="col-1">
            <i
                className={`fa-solid fa-${playing ? 'pause' : 'play'} ${textColor}`}
                disabled={numberOfTracks === 0}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onClick={handleOnClick}
            />
        </div>
    );
}
