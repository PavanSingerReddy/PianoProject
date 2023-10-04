import React from 'react'
import '../components/Styles.css'
import _ from 'lodash'
import { NOTE_TO_KEY } from '../Constants/PianoConstants'


const findKeyIsBlackOrNot = (key)=>{
    return key.length>1
}

const findIfRightKeyIsPressed = (note,pressedKeys)=>{
    return _.includes(pressedKeys,NOTE_TO_KEY[note])
}

const Key = (props) => {
    const keyIsBlack = findKeyIsBlackOrNot(props.note)

    const keyClass = keyIsBlack? "black" : "white"
    const showKey = keyIsBlack? "" : "showKey"
    const fixMarginLeft = props.fixMarginLeft? "fix-margin-left":""

    const keyIsPressed = findIfRightKeyIsPressed(props.note,props.pressedKeys)

    let keyPressClass = null

    if(keyIsPressed && keyIsBlack){
            keyPressClass = "black-key-pressed"
    }
    else if(keyIsPressed && !keyIsBlack){
        keyPressClass = "white-key-pressed"
    }

  return (
    <li className={`${keyClass} ${fixMarginLeft} ${keyPressClass}`}><div className={showKey}>{props.note.toUpperCase()}</div></li>
  )
}

export default Key