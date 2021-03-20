import React, { useState } from 'react';
import SongForm from '../components/SongForm';
import SongTable from '../components/table/SongTable';

// function that manage useState from songs 
function SongOverview() {
    const [songs, setSongs] = useState([
        { id: 1, title: "Onderweg", artist: "Abel", genre: "Nederpop", rating: 4 },
        { id: 2, title: "Lose Yourself", artist: "Eminem", genre: "Hiphop Rap", rating: 3 },
        { id: 3, title: "Domino", artist: "Jessie J", genre: "Pop", rating: 4 }
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


    const sortTitle = () => {
        console.log('sortTitle is working')
        let sortedTitle = songs.sort((a, b) => {
            console.log('sortedTitle is working')
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        });
        setSongs(sortedTitle);
    };

    const sortArtist = () => {
        console.log('sortArtist is working')
        let sortedArtist = songs.sort((a, b) => {
            console.log('sortedArtist is working')
            return a.artist.toLowerCase().localeCompare(b.artist.toLowerCase())
        });
        setSongs(sortedArtist);
    };
 


    // // function that filter select genre (useState, setSongs)
    // const filterGenre = genre => {
    //     let filteredGenre = songs.filter(song => {
    //         console.log('filterGenre werkt!')

    //         // deze funtie klopt nog niet!!!!!!!!!!!
    //         return song.genre === genre;
    //     });
    //     setSongs(filteredGenre);
    // };

    return (
        <div>
            {/* display SongForm and SongTable */}
            <SongForm addSong={addSong} />
            <SongTable songs={songs} deleteSong={deleteSong} sortTitle={sortTitle} sortArtist={sortArtist} data={[
                { id: 1, title: "Onderweg", artist: "Abel", genre: "Nederpop", rating: 4 },
                { id: 2, title: "Lose Yourself", artist: "Eminem", genre: "Hiphop Rap", rating: 3 },
                { id: 3, title: "Domino", artist: "Jessie J", genre: "Pop", rating: 4 }
            ]} />
        </div>
    );
};

export default SongOverview;