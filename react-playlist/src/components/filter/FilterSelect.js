import React, { useState } from 'react';

// function to filter genre                naam van functie nog aanpassen en van component!!
const FilterSelect = () => {
    const [selectGenre, setSelectGenre] = useState('');
    const [selectRating, setSelectRating] = useState('');

    function handleChange(e) {
        console.log('handleChange is working')
        // even onderstaand toegevoegd om errors eruit te halen
        setSelectGenre()
        setSelectRating()
    }

    return (
        <tr className="filter-select-row">
            {/* create empty td's, now select is right above Genre */}
            <td className="empty-td"></td>
            <td className="empty-td"></td>
            <td>
                <select
                    name="genre"
                    value={selectGenre}
                    className="filter-select"
                    onChange={handleChange}
                >
                    <option value="">Genre</option>
                    <option value="Pop">Pop</option>
                    <option value="Nederpop">Nederpop</option>
                    <option value="HiphopRap">Hiphop Rap</option>
                </select>
            </td>
            <td>
                <select
                    name="rating"
                    type="number"
                    value={selectRating}
                    className="filter-select"
                    // onChange={e => setRating(e.target.value)}
                >
                    <option value="">Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </td>
        </tr>
    )
}

export default FilterSelect;