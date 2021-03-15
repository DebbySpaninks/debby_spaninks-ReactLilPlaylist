import React from 'react';

// function to display radio buttons with genre labels
const FilterGenre = () => {
    return (
        <tr class="radio-buttons">
            {/* create empty td's, now radiobuttons and labels right above Genre */}
            <td class="empty-td"></td>
            <td class="empty-td"></td>
            <td>
                <input
                    type="radio"
                    id="genre-pop"
                    name="filter"
                    value="pop"
                />
                <label class="filter-label" for="genre-pop">Pop</label>

                <input
                    type="radio"
                    id="genre-nederpop"
                    name="filter"
                    value="nederpop"
                />
                <label class="filter-label" for="genre-nederpop">Nederpop</label>

                <input
                    type="radio"
                    id="genre-hiprap"
                    name="filter"
                    value="hiprap"
                />
                <label class="filter-label" for="genre-hiprap">Hiphop Rap</label>
            </td>
        </tr>
    )
}

export default FilterGenre;