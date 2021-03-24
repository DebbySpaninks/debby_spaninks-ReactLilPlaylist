import React, { useState, useEffect } from 'react';
import SongForm from '../components/SongForm';
import SongTable from '../components/table/SongTable';

// function that manage useState from songs
function SongOverview() {

  // basic set of songs
  const [songs, setSongs] = useState([
    { id: 1, title: "Onderweg", artist: "Abel", genre: "Nederpop", rating: 4 },
    { id: 2, title: "Lose Yourself", artist: "Eminem", genre: "Hiphop", rating: 3 },
    { id: 3, title: "Domino", artist: "Jessie J", genre: "Pop", rating: 4 }
  ]);

  // copy of songs that can be filtered and/or sorted
  const [filteredSongs, setFilteredSongs] = useState([]);

  // several 
  const [sortKey, setSortKey] = useState('title');
  const [sortDirection, setSortDirection] = useState(1);
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('1');

  useEffect(() => {

    const myFilter = (song) => {
      // assume songs will be included in set
      let result = true;
      if (genre !== '') {
        result = result && (song.genre === genre)
      }
      if (rating !== '') {
        result = result && (song.rating >= rating)
      }
      return result;
    }

    const mySorter = (a, b) => {
      let result = 0;
      if (a[sortKey] < b[sortKey]) {
        result = -1;
      }
      else if (a[sortKey] > b[sortKey]) {
        result = 1;
      }
      return result * sortDirection;
    }

    // filter if a genre or rating is set
    setFilteredSongs(songs.filter(myFilter).sort(mySorter));

  }, [genre, sortKey, rating, songs, sortDirection]);

  // function that add songItems
  const addSong = song => {
    setSongs([...songs, song]);
  };

  // function that delete song
  const deleteSong = id => {
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <div>
      <SongForm addSong={addSong} />
      <SongTable
        songs={filteredSongs}
        deleteSong={deleteSong}
        sortKey={sortKey}
        setSortKey={setSortKey}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        genre={genre}
        setGenre={setGenre}
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
};

export default SongOverview;