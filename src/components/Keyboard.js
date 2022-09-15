import React from 'react'
import ForKeys from './ForKeys';




function Keyboard({play, sound}) {
  return (
    sound.map((sounds,i)=>
     <ForKeys key={i} play= {play} sounds={sounds}/>
     )
  )
}

export default Keyboard