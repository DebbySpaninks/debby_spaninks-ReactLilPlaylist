import React, { useState } from 'react';

// function to display checkbox with genre labels
const FilterCheckbox = () => {
    const [checkedGenre, setCheckedGenre] = useState(false);

    // function to display check after click checkbox
    const handleChange = e => {
        const { name, value, type, checked } = e.target
        type === "checkbox" ?
            setCheckedGenre({
                [name]: checked
            })
            :
            setCheckedGenre({
                [name]: value
            })
    };

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
                    // id="genre-hiprap"                  nog nodig???? anders bij alle checkboxen verwijderen!!!!
                    name="hiprap"
                    value="hiprap"
                    checked={checkedGenre.value}
                    onChange={handleChange} />
                {/*                                    for="      " nog nodig anders bij alle labels verwijderen!!! */}
                <label class="filter-label" for="genre-hiprap">Hiphop Rap</label>
            </td>
        </tr>
    );
};

export default FilterCheckbox;