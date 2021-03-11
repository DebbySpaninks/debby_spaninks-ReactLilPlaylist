import React from 'react';

// function to add songs to table (playlist)
function SongTableItem(props) {
    return (
        <div>
            {/* create table row */}
            {/* add songtable item (data) to playlist*/}
            <tr
                className="table__tr"
                key={props.id}
                value={props.currentValue}
            >
                <tr>
                    {/* display table data */}
                </tr>

            </tr>
        </div>
    );
}

export default SongTableItem;