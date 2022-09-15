import React, {useEffect} from 'react'

function ForKeys({play, sounds:{keyTrigger, url, id, keyCode}}) {
    const handleKeydown=(event)=>{
        if(event.keyCode === keyCode){
            play(keyTrigger, id)
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeydown)
    },)
  return (
    <button  className="drum-pad" id={id} onClick={()=> play(keyTrigger, id)}>
    <audio src={url} id={keyTrigger} className='clip'/>
    {keyTrigger}
</button>
  )
}

export default ForKeys