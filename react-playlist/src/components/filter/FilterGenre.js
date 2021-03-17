import React, { useState } from 'react';

// function to filter genre
const FilterGenre = (props) => {
    const [checkedGenre, setCheckedGenre] = useState(false);

    const handleChange = e => {
        console.log("handleChange is working")
    }

    return (
        <tr class="checkbox">
            {/* create empty td's, now checkbox and labels right above Genre */}
            <td class="empty-td"></td>
            <td class="empty-td"></td>
            <td>
                <input
                    type="checkbox"
                    // id="genre-pop"
                    name="pop"
                    value="pop"
                    checked={checkedGenre.value}
                    onChange={handleChange} />
                <label class="filter-label" for="genre-pop">Pop</label>

                <input
                    type="checkbox"
                    // id="genre-nederpop"
                    name="nederpop"
                    value="nederpop"
                    checked={checkedGenre.value}
                    onChange={handleChange} />
                <label class="filter-label" for="genre-nederpop">Nederpop</label>

                <input
                    type="checkbox"
                    // id="genre-hiprap"
                    name="hiprap"
                    value="hiprap"
                    checked={checkedGenre.value}
                    onChange={handleChange} />
                <label class="filter-label" for="genre-hiprap">Hiphop Rap</label>
            </td>
        </tr>
    )
}

export default FilterGenre;