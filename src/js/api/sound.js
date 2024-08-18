function processTrack(sound) {
    return {
        name: sound.name,
        url: `${process.env.API_BASE_URL}/${sound.url.slice(7)}`,
        category: sound.category === 'category' ? 'Original Soundtrack' : `${sound.category[0].toUpperCase()}${sound.category.slice(1)}`
    };
}

async function fetchTracks() {
    const response = await fetch(`${process.env.API_BASE_URL}/all`, {
        'method': 'GET',
        'headers': { 'accept': 'application/json' }
    });
    const sounds = await response.json();
    return [
        ...sounds.sound_effects.map(soundEffect => processTrack(soundEffect)),
        ...sounds.songs.map(song => processTrack(song))
    ];
}

export { fetchTracks };