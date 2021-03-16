import React, { useState } from 'react';
import SongForm from '../components/SongForm';
import SongTable from '../components/table/SongTable';

// function that manage useState from songs 
function SongOverview() {
    const [songs, setSongs] = useState([]);

    // function that add songItems (useState, songs, setSongs)
    const addSong = song => {
        let songItems = [...songs, song];
        setSongs(songItems);
    };
    // function that delete song (useState, setSongs)
    const deleteSong = id => {
        let deletedSong = songs.filter(song => {
            return song.id !== id;
        });
        setSongs(deletedSong);
    };

    return (
        <div>
            {/* display SongForm and SongTable */}
            <SongForm addSong={addSong} />
            <SongTable songs={songs} deleteSong={deleteSong} />
        </div>
    );
};

export default SongOverview;