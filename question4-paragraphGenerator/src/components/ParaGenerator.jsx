import { useState } from 'react'
import { inputAtom } from '../store/atoms/inputAtom'
import { useRecoilState } from 'recoil'
import { Generator } from '../components/Generator'

export function ParaGenerator() {
    const [inputNumber, setInputNumber]= useRecoilState(inputAtom)
    const [generate, setGenerate]= useState(false)
    
    return (
        <div className="paraGenerator">
            <h2>Para Generator</h2>
            <input 
                type="number" 
                placeholder="Enter Number of Words" 
                onChange={(e) => {
                    setInputNumber(e.target.value)
                    setGenerate(false)
                }}
            />

            <button className='generate' onClick={() => {
                setGenerate(true)
            }}>Generate</button>

            {generate && <Generator inputNumber={inputNumber} /> }
        </div>
    )
}