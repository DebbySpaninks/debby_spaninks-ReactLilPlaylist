import React from 'react';
// import keyIndex from 'react-key-index';
// import SongTableItem from './SongTableItem';

// function to display table headers and SongTableItems
function SongTable(props) {
    return (
        <div>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr className="table-header">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                {/* manage currentValue and displays index of input songs*/}
                <tbody>
                    {props.songs.map(currentValue => {
                        return <tr className="table-row">
                            {/* display table data*/}
                            <td className="table-data">{currentValue[0]}</td>
                            <td className="table-data">{currentValue[1]}</td>
                            <td className="table-data">{currentValue[2]}</td>
                            <td className="table-data">{currentValue[3]}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;