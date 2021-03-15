import TrashIcon from './trash.svg';

// function with parameters (SongTable) to display table data and delete after onClick
const SongTableItem = ({ currentValue, deleteSong, id, title, artist, genre, rating }) => {
    return (
        <tr
            song={currentValue}
            key={id}
            id={id}>
            {/* display table data objects*/}
            <td>{title}</td>
            <td>{artist}</td>
            <td>{genre}</td>
            <td>{rating}</td>
            {/* display trash icon with onClick function to delete table data */}
            <td className="td-icon">
                <img
                    src={TrashIcon}
                    alt="trash icon"
                    class="img-icon"
                    onClick={() => deleteSong(id)}
                /></td>
        </tr>
    );
};

export default SongTableItem;