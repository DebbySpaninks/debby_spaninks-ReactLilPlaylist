import React from 'react';

// function to display table headers buttons
function TableHeader({sortTitle, sortArtist}) {
    // create function to sort songs array.sort
    // sort on title a-z and z-a (capitalize??)
    // sort on artist a-z and z-a (capitalize??)
    // sort rating stars 1-5 and 5-1

    return (
        <thead>
            <tr className="table-header">
                <th>
                    {/* display sort by title button */}
                    <button onClick={() => sortTitle()}>Title
                    </button>
                </th>
                <th>
                    {/* display sort by title button */}
                    <button onClick={() => sortArtist()}>Artist
                    </button>
                </th>
                {/* create sort button (in th) for artist */}

                <th>Genre</th>

                {/* create sort button (in th) for rating stars */}
                <th>Rating</th>
            </tr>
        </thead>
    );
}

export default TableHeader;