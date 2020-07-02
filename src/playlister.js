export default class playlister {
    constructor(scPlayer, songPlaylist) {
        this.scPlayer= scPlayer;
        this.songPlaylist = songPlaylist;
    }

    songResolve = async () => {
        const something = []

        this.scPlayer.resolve('https://soundcloud.com/djangodjango/first-light', function (track){
        something.push(track)

        })

        return something
        
            // array.push(track)
            // console.log(track)
            // return track

    }
   



    // addSong = async () => {
    //     const something = await this.songResolve();
    //     return something
    // }
    
        




  }