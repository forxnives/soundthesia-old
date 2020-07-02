import React from 'react'


const Playlist = ({songPlaylist, updatedSongs, addSong, removeSong}) => {
    return(
        <div>
            <div id="myDIV" class="header">
                <input type="text" id="myInput" placeholder="Title..."/>
                <span onClick={()=>addSong()} class="addBtn">Add</span>
            </div>

            <ul id="myUL">

                {
                    songPlaylist.map((each, i) => 
                    <div>
                        {each[0] == undefined ? console.log('yadoozy'):
                            <li>{console.log(each[0])}</li>
                        }
                        
                        <button id={i} onClick={ ()=> {
                            
                            // console.log(i)

         
                            updatedSongs.splice(i, 1);
                            removeSong()

                        }
                            
                          }>close</button>
                    </div>
                )}


               

            </ul>
        </div>

    )
}

export default Playlist