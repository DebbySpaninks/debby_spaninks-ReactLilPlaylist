import React, {Component} from 'react';
import SongForm from '../components/SongForm';
import SongTable from '../components/table/SongTable';

// create class based component that manage state
class SongOverview extends Component {

    constructor() {
        super()
        this.state =
        {
            songs: []
        }

    }

    addSong = (song) => {
        // doe iets om de state aan te passen
    }

    render() {
        return (
            <div>
                <SongForm addSong={this.addSong} />
                <table style={{ width: "100%" }}>
                    <tr className="song-header">
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </table>
                <SongTable songs={this.state.songs} />
            </div>
        );
    }
}

export default SongOverview;