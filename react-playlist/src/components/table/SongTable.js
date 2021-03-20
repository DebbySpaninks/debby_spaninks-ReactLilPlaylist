import React from 'react';
import TableHeader from './TableHeader';
import FilterSelect from '../filter/FilterSelect';
import useSortableData from './useSortableData';
import SongTableItem from './SongTableItem';

// function to display TableHeader and SongTableItem
const SongTable = props => {
    const {items, requestSort, sortConfig} = useSortableData(props.data);
    const getClassNamesFor = name => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <div>
            <table className="table" style={{ width: "98%" }}>
                <TableHeader sortTitle={props.sortTitle} sortArtist={props.sortArtist}/>
                <thead>
                    <tr>
                        {/* after click on tablehead we update the field we want to sort */}
                        <th><button type="button" onClick={() => requestSort('title')} className={getClassNamesFor('title')}>Title</button></th>
                        <th><button type="button" onClick={() => requestSort('artist')} className={getClassNamesFor('artist')}>Artist</button></th>
                        <th><button type="button" onClick={() => requestSort('genre')} className={getClassNamesFor('genre')}>Genre</button></th>
                        <th><button type="button" onClick={() => requestSort('rating')} className={getClassNamesFor('rating')}>Rating</button></th>
                    </tr>
                </thead>
                <tbody>
                   <FilterSelect />
                    {/* manage song (currentvalue) from added songs (SongOverview)*/}
                    {props.songs.map(song => {
                        // return component (SongTableItem) 
                        return <SongTableItem
                            key={song.id}
                            title={song.title}
                            artist={song.artist}
                            genre={song.genre}
                            rating={song.rating}
                            // deleteSong recives props from SongOverview
                            deleteSong={props.deleteSong}
                            // filterGenre={props.filterGenre}
                            id={song.id} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;