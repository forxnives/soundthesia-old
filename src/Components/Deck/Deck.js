import React from 'react'


const Deck = ({play}) => {
    return(
        <div>
            <button type="button" onClick={() => this.loadTrack()}>Load1</button>
            <button type="button" onClick={() => play()}>PLay1</button>
            <button type="button" onClick={() => this.loadTrack2()}>Load2</button>
            <button type="button" onClick={() => this.pausetrack()}>Pause</button>
        </div>

    )
}

export default Deck