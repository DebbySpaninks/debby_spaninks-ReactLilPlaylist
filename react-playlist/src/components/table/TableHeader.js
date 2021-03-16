import React from 'react';
import FilterGenre from '../filter/FilterGenre';

// function to display table headers and component FilterGenre
function TableHeader() {

    // create function to sort songs array.sort
    // sort on title a-z and z-a (capitalize??)
    // sort on artist a-z and z-a (capitalize??)
    // sort rating stars 1-5 and 5-1

    return (
        <thead>
            {/* component to display radiobuttons to filter songs by genre */}
            <FilterGenre />
            <tr className="table-header">
                {/* create sort button (in th) for title */}
                <th>Title</th>

                {/* create sort button (in th) for artist */}
                <th>Artist</th>

                <th>Genre</th>

                {/* create sort button (in th) for rating stars */}
                <th>Rating</th>
            </tr>
        </thead>
    );
}

export default TableHeader;