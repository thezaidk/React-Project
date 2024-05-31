import React, { useState } from 'react'
import { useEffect } from 'react'
import { ColourChangers } from './components/ColourChangers'
import { useRecoilState } from 'recoil'
import { colourAtom } from './store/atoms/colourAtom'

function App() {
  const [backgroundColour, setBackgroundColour]= useRecoilState(colourAtom)
  
  useEffect(() => {
    document.getElementById("root").style.backgroundColor= backgroundColour
  }, [backgroundColour])

  return (
    <ColourChangers setBackgroundColour={setBackgroundColour}/>
  )
}

export default App
