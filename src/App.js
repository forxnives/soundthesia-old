import React from 'react';
import './App.css';
import SoundCloudAudio from 'soundcloud-audio'




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'https://soundcloud.com/montebooker/atthecrib',
      url2: 'https://soundcloud.com/mrsurf/kaut_up',
      scPlayer: '',
      scPlayer2: ''
    };



  }

  


  componentDidMount() {

    const scPlayer = new SoundCloudAudio('a3dd183a357fcff9a6943c0d65664087');
    // this.state.scPlayer = new SoundCloudAudio('a3dd183a357fcff9a6943c0d65664087')
    this.setState({scPlayer: scPlayer })

    const scPlayer2 = new SoundCloudAudio('a3dd183a357fcff9a6943c0d65664087');

    this.setState({scPlayer2: scPlayer2 })




    // console.log(this.state.url)
  }


  callbackTest (track) {
    console.log(track);

  }


  loadTrack() {
    console.log('loading')


    this.state.scPlayer.resolve(this.state.url, this.callbackTest);

  }

  loadTrack2() {
    console.log('loading')


    this.state.scPlayer2.resolve(this.state.url2, this.callbackTest);

  }


  playTrack() {
    // console.log(this.state.scPlayer)
    this.state.scPlayer.play()


  }

  playTrack2() {
    // console.log(this.state.scPlayer)
    this.state.scPlayer2.play()


  }



//  {
//   // do smth with track object
//   // e.g. display data in a view etc.
//   console.log(track);

//   // once track is loaded it can be played
//   scPlayer.play();

//   // stop playing track and keep silence
//   scPlayer.pause();
// });




  render() {
    return(
      <div>
        <button type="button" onClick={() => this.loadTrack()}>Load1</button>
        <button type="button" onClick={() => this.playTrack()}>PLay1</button>
        <button type="button" onClick={() => this.loadTrack2()}>Load2</button>
        <button type="button" onClick={() => this.playTrack2()}>PLay2</button>


      </div>



    );
  };

};

export default App;
