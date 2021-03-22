import React, { useState } from 'react';

// function to filter genre                naam van functie nog aanpassen en van component!!
function FilterSelect() {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    return (
        <tr className="filter">
            {/* create empty td's, now select is right above Genre */}
            <td className="white-td"></td>
            <td className="white-td"></td>
            <td className="white-td">
                <select
                    name="genre"
                    value={selectedGenre}
                    className="select-filter"
                    onChange={e => setSelectedGenre(e.target.value)}
                    >
                    <option value="">Filter genre</option>
                    <option value="pop">Pop</option>
                    <option value="nederpop">Nederpop</option>
                    <option value="hiphoprap">Hiphop Rap</option>
                </select>
            </td>
            <td className="white-td">
                <select
                    name="rating"
                    value={selectedRating}
                    className="select-filter" 
                    onChange={e => setSelectedRating(e.target.value)}
                >
                    <option value="">Filter rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </td>
        </tr>
    );
};

export default FilterSelect;