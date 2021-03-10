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
                <SongTable songs={this.state.songs} />
            </div>
        );
    }
}

export default SongOverview;