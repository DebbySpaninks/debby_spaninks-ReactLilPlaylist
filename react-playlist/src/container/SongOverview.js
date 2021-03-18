import React, { useState } from 'react';
import SongForm from '../components/SongForm';
import SongTable from '../components/table/SongTable';

// function that manage useState from songs 
function SongOverview() {
    const [songs, setSongs] = useState([
        { id: 1, title: "Onderweg", artist: "Abel", genre: "Nederpop", rating: 4 },
        { id: 2, title: "Lose Yourself", artist: "Eminem", genre: "Hiphop Rap", rating: 3 },
        { id: 3, title: "Domino", artist: "Jessie J", genre: "Pop", rating: 4, }
    ]);

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

    // function that filter select genre (useState, setSongs)
    const filterGenre = id => {
        let filteredGenre = songs.filter(song => {
            return song.genre === id;
        });
        setSongs(filteredGenre);
    };

    return (
        <div>
            {/* display SongForm and SongTable */}
            <SongForm addSong={addSong} />
            <SongTable songs={songs} deleteSong={deleteSong} filterGenre={filterGenre} />
        </div>
    );
};

export default SongOverview;