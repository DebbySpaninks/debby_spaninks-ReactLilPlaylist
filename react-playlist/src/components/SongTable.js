import React from 'react';

// function to display table headers and SongTableItems
function SongTable(props) {
    return (
        <div>
            <table className="table" style={{ width: "100%" }}>
                <thead>
                    <tr className="table-header">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {/* manage currentValue and displays index from song input*/}
                    {props.songs.map(currentValue => {
                        return <tr song={currentValue} key={currentValue.id}>
                            {/* display table data objects*/}
                            <td>{currentValue.title}</td>
                            <td>{currentValue.artist}</td>
                            <td>{currentValue.genre}</td>
                            <td>{currentValue.rating}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;