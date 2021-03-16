import React from 'react';

// function to filter genre
const FilterGenre = (props) => {
    // function to target songs after click genre (checkbox)
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

    // add eventListener on checkbox
    const addEventOnCheckbox = document.getElementsByName('checkbox');
    addEventOnCheckbox.forEach(check => check.addEventListener('change', handleChangeEvent));

    return (
        <div>
            <h6> filter genre </h6>
        </div>
    )
}

export default FilterGenre;