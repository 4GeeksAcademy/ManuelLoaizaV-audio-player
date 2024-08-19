import React, { useEffect, useRef, useState } from 'react';
import Player from './player';
import Playlist from './playlist';
import { fetchTracks } from '../api/track';

export default function App() {
    const [currentSongIndex, setCurrentSongIndex] = useState(undefined);
    const [tracks, setTracks] = useState([]);
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        async function startFetching() {
            const fetchedTracks = await fetchTracks();
            setTracks(fetchedTracks);
        }
        startFetching();
    }, []);

    function setCurrentTrack(index) {
        setCurrentSongIndex(index);
        audioRef.current.src = tracks[index].url;
        audioRef.current.play();
        setPlaying(true);
    }

    return (
        <>
            <Playlist
                tracks={tracks}
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                audioRef={audioRef}
                setCurrentTrack={setCurrentTrack}
            />
            <Player
                numberOfTracks={tracks.length}
                audioRef={audioRef}
                currentSongIndex={currentSongIndex}
                setCurrentTrack={setCurrentTrack}
                playing={playing}
                setPlaying={setPlaying}
            />
        </>
    );
}