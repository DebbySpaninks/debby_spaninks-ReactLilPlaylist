import React from 'react';
import TableHeader from './TableHeader';
import SongTableItem from './SongTableItem';

// function to display TableHeader and SongTableItem
function SongTable(props) {
    return (
        <div>
            <table className="table" style={{ width: "98%" }}>
                <TableHeader />
                <tbody>
                    {/* manage currentValue from added songs (SongOverview)*/}
                    {props.songs.map(currentValue => {
                        return <SongTableItem
                            key={currentValue.id}
                            title={currentValue.title}
                            artist={currentValue.artist}
                            rating={currentValue.rating}
                            // deleteSong recives props from SongOverview
                            deleteSong={props.deleteSong}
                            id={currentValue.id} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SongTable;