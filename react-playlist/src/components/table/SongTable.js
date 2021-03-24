import React from 'react';
import useSortableData from '../sort/useSortableData';
import FilterSelect from '../filter/FilterSelect';
import SongTableItem from './SongTableItem';

// function to display SongTable with sort function (useSortableData)
const SongTable = props => {
  const {items, requestSort} = useSortableData(props.songs);

  return (
    <div>
      <table className="table" style={{ width: "98%" }}>
        <thead className="table-header">
          <tr>
            {/* after click on tablehead we update the field we want to sort */}
            <th className="sorted" onClick={() => requestSort('title')}>Title</th>
            <th className="sorted desc" onClick={() => requestSort('artist')}>Artist</th>
            <th className="sorted desc" onClick={() => requestSort('genre')}>Genre</th>
            <th className="sorted desc" onClick={() => requestSort('rating')}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {/* filterSelect staat tussen de tableheaders en de data in. Dat is hier */}
          <FilterSelect />
          {/* manage song from added items */}
          {/* filter().map toevoegen met filterfunctie erin */}
          {items.map(song => {
            // return component (SongTableItem) 
            return <SongTableItem
              key={song.id}
              title={song.title}
              artist={song.artist}
              genre={song.genre}
              rating={song.rating}
              // deleteSong recives props from SongOverview
              deleteSong={props.deleteSong}
              filterGenre={props.filterGenre}
              filterRating={props.filterRating}
              id={song.id} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SongTable;