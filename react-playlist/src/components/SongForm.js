import React, { useState } from 'react';

// function with form input + select to display them
function SongForm({ addSong }) {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    // add sort, setSort = useState

    // function to add songs after onChange event
    const handleSubmit = e => {
        e.preventDefault();
        // create unique id for added songs
        const id = Math.random().toString(16).slice(2);
        // after submit(click) add input (objects) to addSong
        addSong({ title: title, artist: artist, genre: genre, rating: rating, id: id });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {/* input for TITLE */}
            <input
                name="title"
                type="text"
                value={title}
                placeholder="Title"
                className="input-primary"
                onChange={e => setTitle(e.target.value)}
            />
            {/* input for ARTIST */}
            <input
                name="artist"
                type="text"
                value={artist}
                placeholder="Artist"
                className="input-primary"
                onChange={e => setArtist(e.target.value)}
            />
            {/* select options for GENRE */}
            <select
                name="genre"
                value={genre}
                className="select-primary"
                onChange={e => setGenre(e.target.value)}
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
                className="select-primary"
                onChange={e => setRating(e.target.value)}
            >
                <option value="">Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {/* button to add songs after input */}
            <button
                className='submit-button'
                type='submit'>
                Add song
            </button>
        </form>
    );
};

export default SongForm;