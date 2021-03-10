import React, {Component} from 'react';
import SongForm from '../components/SongForm';
import SongTable from '../components/table/SongTable';

// create class based component that manage state from songs 
class SongOverview extends Component {

    constructor() {
        super()
        this.state =
        {
            songs: []
        }

    }
// make function to add new state from song to SongTableItem
    addSong = (song) => {
        // doe iets om de state aan te passen        prevState???
    }

    render() {
        return (
            <div>
                {/* display SongForm and SongTable */}
                <SongForm addSong={this.addSong} />
                <SongTable songs={this.state.songs} />
            </div>
        );
    }
}

export default SongOverview;