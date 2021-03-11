import React, { useState } from 'react';

// function with form input + select to display them
function SongForm({ addSong }) {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    // function to handle submit
    const handleSubmit = event => {
        // after submit add input to addSong
        addSong([title, artist, genre, rating])
        event.preventDefault();
    }

    return (
        <form onSubmit={event => { handleSubmit(event) }}>
            <h2>header SongForm</h2>
            {/* input for TITLE */}
            <input
                name="title"
                type="text"
                value={title}
                placeholder="Title"
                onChange={event => setTitle(event.target.value)}
            />
            {/* input for ARTIST */}
            <input
                name="artist"
                type="text"
                value={artist}
                placeholder="Artist"
                onChange={event => setArtist(event.target.value)}
            />
            {/* select options for GENRE */}
            <select
                name="genre"
                value={genre}
                onChange={event => setGenre(event.target.value)}
            >
                <option value="">Genre</option>
                <option value="Pop">Pop</option>
                <option value="Nederpop">Nederpop</option>
                <option value="HiphopRap">Hiphop Rap</option>
            </select>
            {/* select options for RATING */}
            <select
                name="rating"
                type="number"
                value={rating}
                onChange={event => setRating(event.target.value)}
            >
                <option value="">Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {/* button to add songs after input */}
            <input
                className='submit-button'
                type='submit'
                value='Add Song'
            />
        </form>
    );
}

export default SongForm;