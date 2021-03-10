import React from 'react';
import SongTableItem from './SongTableItem';

// function with table headers and SongTableItems to display
function SongTable() {
    return (
        <div>
            <h2>header SongTable</h2>
            <table style={{ width: "100%" }}>
                <tr className="table-header">
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
            </table>
            <SongTableItem />
        </div>
    );
}

export default SongTable;