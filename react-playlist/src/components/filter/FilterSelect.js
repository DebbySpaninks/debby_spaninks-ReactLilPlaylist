import React, { useState } from 'react';

// function to filter genre                naam van functie nog aanpassen en van component!!
function FilterSelect() {
    const [selectGenre, setSelectGenre] = useState('');
    const [selectRating, setSelectRating] = useState('');

    // handleChange or handleSubmit to return the array with filtered items
    // in SongOverview staat functie om te filteren maar is nog niet meegegeven aan FilterSelect
    // SongTable ontvangt props () van SongOverview

    return (
        <tr className="filter">
            {/* create empty td's, now select is right above Genre */}
            <td className="white-td"></td>
            <td className="white-td"></td>
            <td className="white-td">
                <select
                    name="genre"
                    value={selectGenre}
                    className="select-filter"
                    // onChange={handleSelectGenre}
                    onChange={e => setSelectGenre(e.target.value)}
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
                    value={selectRating}
                    className="select-filter" 
                    // onChange={handleSelectRating}
                    onChange={e => setSelectRating(e.target.value)}
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


    // // functie to select genre and log it
    // const handleSelectGenre = e => {
    //     switch (e.target.value) {
    //         case 'pop':
    //         case 'nederpop':
    //         case 'hiphoprap':
    //             console.log('genre', {}, 'is geselecteerd');
    //             // filterGenre({ genre: selectGenre, id: id });
    //             break;
    //         default:
    //             console.log('no genres are selected');
    //             break;
    //     };
    //     setSelectGenre();
    // };

    // // function to select rating and log it
    // const handleSelectRating = e => {
    //     switch (e.target.value) {
    //         case '1':
    //         case '2':
    //         case '3':
    //         case '4':
    //         case '5':
    //             console.log('rating' , {}, 'is geselecteerd');
    //             // filterRating('');
    //             break;
    //         default:
    //             console.log('no ratings are selected');
    //             break;
    //     };
    //     setSelectRating();
    // };

export default FilterSelect;