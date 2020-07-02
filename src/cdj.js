export default class cdj {
    constructor(scPlayer) {
        this.scPlayer= scPlayer;
    }

    playSong(){
        this.scPlayer.play({
            streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'
          });
    
        
    }


  }