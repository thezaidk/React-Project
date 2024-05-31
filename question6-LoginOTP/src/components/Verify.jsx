import { useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Msg } from './Msg';

export function Verify() {
    const location = useLocation();
    const number = location.state?.number;

    if (number == null) return <h1>Number not found!</h1>;

    const [showMsg, setShowMsg] = useState(false);
    const [otpNum1, setOtpNum1] = useState('');
    const [otpNum2, setOtpNum2] = useState('');
    const [otpNum3, setOtpNum3] = useState('');
    const [otpNum4, setOtpNum4] = useState('');

    const otp1 = useRef(null);
    const otp2 = useRef(null);
    const otp3 = useRef(null);
    const otp4 = useRef(null);

    const handleChange = (e, setOtp, nextRef) => {
        setShowMsg(false)
        const value = e.target.value;
        if (value.length <= 1) {
            setOtp(value);
            if (value.length === 1 && nextRef) {
                nextRef.current.focus();
            }
        }
    };

    return (
        <div className='verify'>
            <h2 className='verifyTitle'>Login via OTP</h2>
            <div className='otp'>
                <input 
                    type="number" 
                    ref={otp1}
                    value={otpNum1}
                    className='otpBox'
                    onChange={(e) => handleChange(e, setOtpNum1, otp2)}
                />
                <input 
                    type="number" 
                    ref={otp2} 
                    value={otpNum2}
                    className='otpBox'
                    onChange={(e) => handleChange(e, setOtpNum2, otp3)}
                />
                <input 
                    type="number" 
                    ref={otp3} 
                    value={otpNum3}
                    className='otpBox'
                    onChange={(e) => handleChange(e, setOtpNum3, otp4)}
                />
                <input 
                    type="number" 
                    ref={otp4} 
                    value={otpNum4}
                    className='otpBox'
                    onChange={(e) => handleChange(e, setOtpNum4, null)}
                />
            </div>
            <button className='loginBtn' onClick={() => {
                setShowMsg(true);
            }}>Login</button>
            <div className='msgBox'>
                {showMsg && <Msg otp={otpNum1 + otpNum2 + otpNum3 + otpNum4} />}
            </div>
        </div>
    );
}
