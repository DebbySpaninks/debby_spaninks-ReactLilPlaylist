import React from 'react';
import TrashIcon from './trash.svg';

// function with parameters (SongTable) to display table data and delete after onClick
const SongTableItem = ({ id, artist, title, genre, rating, deleteSong }) => {
  return (
    <tr key={id}>
      <td>{artist}</td>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{rating}</td>
      <td className="td-icon">
        <img
          src={TrashIcon}
          alt="trash icon"
          className="img-icon"
          onClick={() => deleteSong(id)} />
      </td>
    </tr>
  );
};

export default SongTableItem;