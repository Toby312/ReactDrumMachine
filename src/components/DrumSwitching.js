import React from 'react'

const DrumSwitching= ({stop, power, volume, handleVolumeChange, theName, changeSoundGroup}) =>{
  return (
    <div>
       <p>Volume %{Math.round(volume*100)}</p>
       <input
              max='1'
              min='0'
              onChange={handleVolumeChange}
              step='0.01'
              type='range'
              value={volume}
            />
           


      <h5>{theName}</h5>
        <button className="switching" onClick={changeSoundGroup}>Sound Bank</button>
        </div>
  )
}

export default DrumSwitching