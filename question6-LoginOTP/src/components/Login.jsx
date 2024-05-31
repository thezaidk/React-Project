import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Login(){
    const [number, setNumber]= useState('')
    const navigate= useNavigate()

    return (
        <div className='login'>
            <h2 className='loginTitle'>Login via OTP</h2>
            <input type="number" value={number} className='loginNumber' onChange={(e) => {
                const value= e.target.value
                if(value.length <= 10)
                    setNumber(value)
                else
                    alert("Number should be 10 digits!")
            }} />
            <button className='sendOtpBtn' onClick={() => {
                if(number.length < 10)
                    alert("Number should be 10 digits!")
                else
                    navigate('/verify', {state: {number}})
            }}>Send OTP</button>
        </div>
    )
}