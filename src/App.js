import React, {useState} from 'react'
import './App.css';
import DrumSwitching from './components/DrumSwitching';
import Keyboard from './components/Keyboard';





const firstGroupOfSounds = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const secondGroupOfSounds = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const soundsName = {
  heaterKits: "heater kits",
  smoothPianoKits: "Smooth Piano Kits"
}
const soundsGroup = {
  heaterKits: firstGroupOfSounds,
  smoothPianoKits: secondGroupOfSounds
}

function App() {
  const [power, setPower]= useState(false)
  const [volume, setVolume]= useState(1)
  const [soundName, setSoundName]= useState("")
  const [soundType, setSoundType]= useState("heaterKits");
  const [sound, setSound]= useState(soundsGroup[soundType])


  var stop = ()=>{
    setPower(!power)
  }

  const handleVolumeChange = (event)=>{
    setVolume(event.target.value)
  }

  const hoverPositive = (theAudio)=>{
    theAudio.parentElement.style.backgroundColor ="#000000"
    theAudio.parentElement.style.color ="#ffffff"
   }

   const hoverNegative = (theAudio) =>{
    setTimeout(()=>{
    theAudio.parentElement.style.backgroundColor = "#ffffff"
    theAudio.parentElement.style.color ="#000000"
    }, 300)
   }

  const play=(key, theSounds)=>{
    setSoundName(theSounds)
    const audio= document.getElementById(key)
    hoverPositive(audio)
    hoverNegative(audio)
    audio.currentTime= 0
    audio.play()
  
   
  }       
  

  const changeSoundGroup = ()=>{
    setSoundName("")
    if(soundType=== "heaterKits"){
      setSoundType("smoothPianoKits")
      setSound(soundsGroup.smoothPianoKits)
    }
    else {
      setSoundType("heaterKits")
      setSound(soundsGroup.heaterKits)
    }
  }

  const setTheVolume= () => {
    const audios= sound.map(s=> document.getElementById(s.keyTrigger))
    audios.forEach(audio=> {
      if(audio){
        audio.volume= volume
      }
    });
  }

  return (
    
    <div className='volumeSet'>
      <div id ="drum-machine">
      {setTheVolume()}
    <div id= "display">
      <Keyboard play={play} sound={sound}/>
      <DrumSwitching 
      stop = {stop}
      volume={volume}
      handleVolumeChange={handleVolumeChange}
      theName={soundName || soundsName[soundType]} 
      changeSoundGroup={changeSoundGroup} />
    </div>
    </div>
    </div>
   
  )
}






export default App;
