import React, { useState } from 'react';
import SongForm from '../components/SongForm';
import SongTable from '../components/SongTable';

// function that manage useState from songs 
function SongOverview() {
    const [songs, setSongs] = useState([]);
    // function that add songItems
    const addSong = song => {
        let songItems = [...songs, song];
        setSongs(songItems);
    }

    return (
        <div>
            {/* display SongForm and SongTable */}
            <SongForm addSong={addSong} />
            <SongTable songs={songs} />
        </div>
    );
}

export default SongOverview;