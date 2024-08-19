import React from 'react';
import Header from './header';
import Track from './track';

export default function Playlist({ tracks, currentSongIndex, setCurrentTrack }) {
    return (
        <ul className="list-group bg-black">
            <Header />
            {
                tracks.map((track, index) => <Track
                    key={index}
                    index={index}
                    track={track}
                    numberOfTracks={tracks.length}
                    currentSongIndex={currentSongIndex}
                    setCurrentTrack={setCurrentTrack}
                />)
            }
        </ul>
    );  
};
