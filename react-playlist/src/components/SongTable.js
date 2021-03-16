import React from 'react';
import TableHeader from './TableHeader';
import SongTableItem from './SongTableItem';
import InputCheckbox from './InputCheckbox'

// function to display TableHeader and SongTableItem
function SongTable(props) {
    return (
        <div>
            <table className="table" style={{ width: "98%" }}>
                <TableHeader />
                <tbody>
                    <InputCheckbox />
                    {/* manage currentValue from added songs (SongOverview)*/}
                    {props.songs.map(currentValue => {
                        // return component (SongTableItem) 
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