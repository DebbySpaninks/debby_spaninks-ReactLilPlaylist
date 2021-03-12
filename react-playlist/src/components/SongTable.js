import React from 'react';
import TableHeader from './TableHeader';

// function to display SongTableItems
function SongTable(props) {
    return (
        <div>
            <table className="table" style={{ width: "100%" }}>
                <TableHeader />
                <tbody>
                    {/* manage currentValue and displays index from song input*/}
                    {props.songs.map(currentValue => {
                        return <tr song={currentValue} key={currentValue.id}>
                            {/* display table data objects*/}
                            <td>{currentValue.title}</td>
                            <td>{currentValue.artist}</td>
                            <td>{currentValue.genre}</td>
                            <td>{currentValue.rating}</td>
                            <td className="icon"></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;