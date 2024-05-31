
export function Msg({otp}) {
    if(otp.length != 4){
        return (
            <h3 className="msg">Please Enter 4 digit OTP</h3>
        )
    }
    console.log(otp)
    const random= Math.floor(Math.random()*2)
    const msg= random == 0 ? 'Invalid OTP!' : 'Login successfully!'

    return(
        <h3 className="msg">{msg}</h3>
    )
}