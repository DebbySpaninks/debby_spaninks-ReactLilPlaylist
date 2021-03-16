import React from 'react';

// function to display checkbox with genre labels
const FilterCheckbox = () => {
    return (
        <tr class="checkbox">
            {/* create empty td's, now checkbox and labels right above Genre */}
            <td class="empty-td"></td>
            <td class="empty-td"></td>
            <td>
                <input
                    type="checkbox"
                    id="genre-pop"
                    name="check"
                    value="pop"
                />
                <label class="filter-label" for="genre-pop">Pop</label>

                <input
                    type="checkbox"
                    id="genre-nederpop"
                    name="check"
                    value="nederpop"
                />
                <label class="filter-label" for="genre-nederpop">Nederpop</label>

                <input
                    type="checkbox"
                    id="genre-hiprap"
                    name="check"
                    value="hiprap"
                />
                <label class="filter-label" for="genre-hiprap">Hiphop Rap</label>
            </td>
        </tr>
    )
}

export default FilterCheckbox;