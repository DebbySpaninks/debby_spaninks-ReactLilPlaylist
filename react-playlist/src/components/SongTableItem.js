import TrashIcon from './trash.svg';

const SongTableItem = ({ currentValue, deleteSong, id, title, artist, genre, rating}) => {
    // const {title, artist, genre, rating } = currentValue;
    return (
        <tr
            song={currentValue}
            key={id}
            onClick={deleteSong}
            id={id}>
            {/* display table data objects*/}
            <td>{title}</td>
            <td>{artist}</td>
            <td>{genre}</td>
            <td>{rating}</td>
            {/* display trash icon with onClick function to delete table data objects */}
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