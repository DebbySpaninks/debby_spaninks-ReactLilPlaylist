import React from 'react';
import TrashIcon from './trash.svg';

// function with parameters (SongTable) to display table data and delete after onClick
const SongTableItem = ({ id, title, artist, genre, rating, deleteSong }) => {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{artist}</td>
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