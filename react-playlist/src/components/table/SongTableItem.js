import React from 'react';
import TrashIcon from './trash.svg';

// function with parameters (SongTable) to display table data and delete after onClick
const SongTableItem = ({ data, deleteSong, filterGenre, id, title, artist, genre, rating }) => {
    return (
        <tr
            song={data}
            key={id}
            id={id}>
            {/* display table data*/}
            <td>{title}</td>
            <td>{artist}</td>
            <td>{genre}</td>
            <td>{rating}</td>
            {/* display trash icon with onClick function to delete table data */}
            <td className="td-icon">
                <img
                    src={TrashIcon}
                    alt="trash icon"
                    className="img-icon"
                    onClick={() => deleteSong(id)} />
            </td>

            {/* ik moet een onClick funtie voor filterGenre hebben zoals hier bij deletesong is gedaan */}
        </tr>
    );
};

export default SongTableItem;