import React from 'react';
import TableHeader from './TableHeader';
import SongTableItem from './SongTableItem';
// import TrashIcon from './trash.svg';

// function to display SongTableItems
function SongTable(props) {
    return (
        <div>
            <table className="table" style={{ width: "98%" }}>
                <TableHeader />
                <tbody>
                    {props.songs.map(currentValue => {
                        return <SongTableItem
                            songData={currentValue}
                            key={currentValue.id}
                            deleteSong={currentValue.deleteSong}
                            id={currentValue.id} />
                    })}

                    {/* manage currentValue and displays index from song input*/}
                    {/* {props.songs.map(currentValue => {
                        return <tr
                            song={currentValue}
                            key={currentValue.id}
                            deleteSong={props.deleteSong}
                            id={currentValue.id}> */}
                    {/* display table data objects*/}
                    {/* <td>{currentValue.title}</td>
                            <td>{currentValue.artist}</td>
                            <td>{currentValue.genre}</td>
                            <td>{currentValue.rating}</td> */}
                    {/* display trash icon with onClick function to delete table data objects */}
                    {/* <td className="td-icon">
                                <img
                                    src={TrashIcon}
                                    alt="trash icon"
                                    class="img-icon"
                                    onClick={() => deleteSong(id)}
                                /></td>
                        </tr>
                    })} */}

                </tbody>
            </table>
        </div>
    );
}

export default SongTable;