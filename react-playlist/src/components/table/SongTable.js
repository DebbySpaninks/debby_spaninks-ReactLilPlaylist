import React from 'react';
import SongTableItem from './SongTableItem';

// function to display SongTable with sort function
const SongTable = props => {

  // changeSortKey function compares if the requested sort key is equal to current key
  // If equal, change sort direction by multiplying with minus 1.
  // If not equal, set a new sort key
  const changeSortKey = (key) => {
    if (key === props.sortKey) {
      props.setSortDirection(props.sortDirection * -1);
    }
    else {
      props.setSortKey(key);
    }
  }

  // Create an array containing the unique values for genre, found in songs
  const uniqueGenres = [...new Set(props.songs.map(song => song.genre))];

  return (
    <div>
      <table className="table">
        <thead className="table-header">
          <tr>
            {/* after click on tablehead we update the field we want to sort by */}
            <th>
              <span
                className={(props.sortKey === 'artist' ?
                  (props.sortDirection < 0 ? 'sorted' : 'sorted desc') : '')}
                onClick={() => changeSortKey('artist')}>
                Artist
              </span>
            </th>
            <th>
              <span
                className={(props.sortKey === 'title' ?
                  (props.sortDirection < 0 ? 'sorted' : 'sorted desc') : '')}
                onClick={() => changeSortKey('title')}>
                Title
              </span>
            </th>
            <th>
              <span
                className={(props.sortKey === 'genre' ?
                  (props.sortDirection < 0 ? 'sorted' : 'sorted desc') : '')}
                onClick={() => changeSortKey('genre')}>
                Genre
              </span>
              <select
                value={props.genre}
                onChange={e => props.setGenre(e.currentTarget.value)}>
                <option
                  value="">all Genres</option>
                {uniqueGenres.map((genre, index) =>
                  <option key={index} value={genre}>{genre}</option>
                )};
              </select>
            </th>
            <th>
              <span
                className={(props.sortKey === 'rating' ?
                  (props.sortDirection < 0 ? 'sorted' : 'sorted desc') : '')}
                onClick={() => changeSortKey('rating')}>
                Rating
              </span>
              <select
                value={props.rating}
                onChange={e => props.setRating(e.currentTarget.value)}>
                <option value="">select Stars</option>
                <option value="1">1+ star</option>
                <option value="2">2+ stars</option>
                <option value="3">3+ stars</option>
                <option value="4">4+ stars</option>
                <option value="5">5 stars</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>

          {props.songs.length ? props.songs.map(song => {
            return <SongTableItem
              id={song.id}
              key={song.id}
              title={song.title}
              artist={song.artist}
              genre={song.genre}
              rating={song.rating}
              deleteSong={props.deleteSong}
            />
          }) : <tr><td>Sorry, no matching songs found</td></tr>}

        </tbody>
      </table>
    </div>
  );
};

export default SongTable;