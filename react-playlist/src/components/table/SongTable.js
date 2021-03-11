import React from 'react';
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
                        return <tr>
                            {/* display table data*/}
                            <td>{currentValue[0]}</td>
                            <td>{currentValue[1]}</td>
                            <td>{currentValue[2]}</td>
                            <td>{currentValue[3]}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;