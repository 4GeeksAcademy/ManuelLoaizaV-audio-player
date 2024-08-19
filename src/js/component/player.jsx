import React from 'react';
import NextTrack from './next-track';
import PreviousTrack from './previous-track';
import TooglePlay from './toogle-play';

export default function Player({ numberOfTracks, audioRef, currentSongIndex, setCurrentTrack, playing, setPlaying }) {
    return (
        <ul className="list-group bg-black">
            <li className="list-group-item bg-black text-secondary border border-bottom-0 border-start-0 border-end-0 border-secondary fixed-bottom">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <PreviousTrack
                            numberOfTracks={numberOfTracks}
                            currentSongIndex={currentSongIndex}
                            setCurrentTrack={setCurrentTrack}
                        />
                        <TooglePlay
                            numberOfTracks={numberOfTracks}
                            audioRef={audioRef}
                            currentSongIndex={currentSongIndex}
                            playing={playing}
                            setPlaying={setPlaying}
                        />
                        <NextTrack
                            numberOfTracks={numberOfTracks}
                            currentSongIndex={currentSongIndex}
                            setCurrentTrack={setCurrentTrack}
                        />
                    </div>
                </div>
            </li>
        </ul>
    );
};
