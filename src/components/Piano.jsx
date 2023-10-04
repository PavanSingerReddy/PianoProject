import React, { useEffect, useState } from 'react'
import Key from './Key'
import _ from 'lodash'
import { KEY_TO_NOTE, NOTES, VALID_KEYS } from '../Constants/PianoConstants'


const playNote = (note)=>{
    if(!_.isEmpty(note)){
        const audio = new Audio();
        audio.src = `./public/audio/${note}.mp3`
        audio.play();
        
    }
}



const Piano = () => {

    const [pressedKeys, setpressedKeys] = useState([])

    const handleKeyDown = (event)=>{
        if(event.repeat){
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [...pressedKeys]
        if(!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)){
            updatedPressedKeys.push(key)
        }
        setpressedKeys(updatedPressedKeys)

        playNote(KEY_TO_NOTE[key]);
    
    }
    
    
    const handleKeyUp = (event)=>{
        const index = pressedKeys.indexOf(event.key)
        if(index > -1){
            setpressedKeys(pressedKeys.splice(index,1))
        }

        // here are we are again setting the state of the pressed keys because we want to render the keys again after the key press is over so that the keyPressClass in key.jsx gets updated
        setpressedKeys(pressedKeys)
    }

useEffect(() => {
    window.addEventListener('keydown',handleKeyDown)
    window.addEventListener('keyup',handleKeyUp)

  return () => {
    window.removeEventListener('keydown',handleKeyDown)
    window.removeEventListener('keyup',handleKeyUp)
  }
}, [])

    

    let prevKey = null

    const keys = _.map(NOTES,(note,index)=>{


        // if both the previous key and current key are not white then no need to change the margin left of the key other wise change the margin of the key by passing the class name
        if(prevKey&& prevKey.length==1 && note.length ==1){
            prevKey = note;
            return(
                <Key key={index} note={note} pressedKeys={pressedKeys} />
            )
        }
        prevKey = note;
        return(
            <Key key={index} note={note} fixMarginLeft={true} pressedKeys={pressedKeys} />
        )
    })
  return (
    <ul>
        {keys}
    </ul>

  )
}

export default Piano