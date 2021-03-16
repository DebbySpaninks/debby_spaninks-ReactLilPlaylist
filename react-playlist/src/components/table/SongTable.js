import React from 'react';
import TableHeader from './TableHeader';
import FilterCheckbox from '../filter/FilterCheckbox';
import SongTableItem from './SongTableItem';

// function to display TableHeader and SongTableItem
function SongTable(props) {
    return (
        <div>
            <table className="table" style={{ width: "98%" }}>
                <TableHeader />
                <tbody>
                    <FilterCheckbox />
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
                            id={song.id} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;