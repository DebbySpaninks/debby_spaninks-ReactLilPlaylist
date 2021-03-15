import React from 'react';

// function to display radio buttons with genre labels
const FilterGenre = () => {
    // function to target songs after click genre (radiobuttons)
    const handleChangeEvent = e => {
        switch (e.target.value) {
            case 'pop':
                document.write('this is the Pop genre');
                // filterSongs('Pop');
                break;
            case 'nederpop':
                document.write('this is the Nederpop genre');
                // filterSongs('Nederpop');
                break;
            case 'hiprap':
                document.write('this is the Hiphop Rap genre');
                // filterSongs('Hiphop Rap');
                break;
            default:
                document.write('There are no songs available that match the genre you have selected');
                break;
        }
    };

    // add eventListener on radiobuttons
    const addEventOnRadioButtons = document.getElementsByName('filter');
    addEventOnRadioButtons.forEach(radio => radio.addEventListener('change', handleChangeEvent));

    // function to filter word in songTitle
    // const filterSongs = (wordInSongTitle) => {
    //     genreTitle(wordInSongTitle);                    deze niet gebruiken!!
    //     const filteredSongs = movies.filter(movie => movie.Title.includes(wordInSongTitle));
    //     addSongsToDom(filteredSongs);      was: addMoviesToDom
    // };

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