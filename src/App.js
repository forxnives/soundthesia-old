import React from 'react';
import './App.css';
import SoundCloudAudio from 'soundcloud-audio'
import cdj from './cdj'
import playlister from './playlister'

import Deck from './Components/Deck/Deck'
import Playlist from './Components/Playlist/Playlist'





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songPlaylist: []


    };
    this.scPlayer1='';
    this.scPlayer2='';
    this.deck1='';
    this.deck2='';
    this.playlister='';
    this.updatedSongs=[];



  }

  


  componentDidMount() {

    this.scPlayer1 = new SoundCloudAudio('a3dd183a357fcff9a6943c0d65664087');

    this.deck1 = new cdj(this.scPlayer1)
    this.playlister = new playlister(this.scPlayer1, this.state.songPlaylist)
  }

  componentDidUpdate(){
    console.log('updated')
  }




  addSong = async () => {
    let array = []
    const songObj = await this.playlister.songResolve();
    await array.push(songObj);
    this.updatedSongs = await this.state.songPlaylist.concat(array)

    

    await this.setState({songPlaylist: this.updatedSongs})

    // this.setState({songPlaylist: updatedSongs});
  }

  removeSong() {

    // const updatedSongs = this.state.songPlaylist.concat('new value')
    this.setState({songPlaylist: this.updatedSongs})

  }



  test(){
    console.log(this.state.songPlaylist[0][0].title)

  }


  render() {
    return(
      <div>

        <Deck play={() => this.deck1.playSong()} />
        <Playlist songPlaylist = { this.state.songPlaylist } updatedSongs={this.updatedSongs} addSong={() => this.addSong()} removeSong={()=> this.removeSong()} />
        <button onClick={()=> this.test()} > test </button>
        



      </div>



    );
  };

};

export default App;
