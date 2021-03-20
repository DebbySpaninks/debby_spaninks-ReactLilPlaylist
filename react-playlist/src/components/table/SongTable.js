import React from 'react';
import FilterSelect from '../filter/FilterSelect';
import useSortableData from './useSortableData';
import SongTableItem from './SongTableItem';
import ArrowIcon from './arrow-icon.png';

// function to display SongTable with sort function (useSortableData)
const SongTable = props => {
    const { items, requestSort, sortConfig } = useSortableData(props.data);
    const getClassNamesFor = name => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <div>
            <table className="table" style={{ width: "98%" }}>
                <thead>
                    <tr>
                        {/* after click on tablehead we update the field we want to sort */}
                        <th>
                            <button type="button"
                                onClick={() => requestSort('title')}
                                className={getClassNamesFor('title')}>Title
                                <img
                                    src={ArrowIcon}
                                    alt="arrow icon"
                                    className="arrow-icon" />
                            </button>
                        </th>
                        <th>
                            <button type="button"
                                onClick={() => requestSort('artist')}
                                className={getClassNamesFor('artist')}>artist
                                <img
                                    src={ArrowIcon}
                                    alt="arrow icon"
                                    className="arrow-icon" />
                            </button>
                        </th>
                        <th>
                            <button type="button"
                                onClick={() => requestSort('genre')}
                                className={getClassNamesFor('genre')}>Genre
                                <img
                                    src={ArrowIcon}
                                    alt="arrow icon"
                                    className="arrow-icon" />
                            </button>
                        </th>
                        <th>
                            <button type="button"
                                onClick={() => requestSort('rating')}
                                className={getClassNamesFor('rating')}>rating
                                <img
                                    src={ArrowIcon}
                                    alt="arrow icon"
                                    className="arrow-icon" />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <FilterSelect />
                    {/* manage song (data) from added items */}
                    {items.map(data => {
                        // return component (SongTableItem) 
                        return <SongTableItem
                            key={data.id}
                            title={data.title}
                            artist={data.artist}
                            genre={data.genre}
                            rating={data.rating}
                            // deleteSong recives props from SongOverview
                            deleteSong={props.deleteSong}
                            // filterGenre={props.filterGenre}
                            id={data.id} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;