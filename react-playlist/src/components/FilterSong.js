import React from 'react';

const FilterSong = () => {
    return (
        <div class="radio-buttons">
            <input
                type="radio"
                id="genre-pop"
                name="filter"
                value="pop"
            />
            <label for="genre-pop">Pop</label>

            <input
                type="radio"
                id="genre-nederpop"
                name="filter"
                value="nederpop"
            />
            <label for="genre-nederpop">Nederpop</label>

            <input
                type="radio"
                id="genre-hiprap"
                name="filter"
                value="hiprap"
            />
            <label for="genre-hiprap">Hiphop Rap</label>
        </div>
    )
}

export default FilterSong;