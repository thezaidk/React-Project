
export function ColourChangers({setBackgroundColour}) {
    return (
        <div className="colourChangers">
            <button className="red" onClick={() => {
                setBackgroundColour('red')
            }}>Red</button>
            <button className="yellow" onClick={() => {
                setBackgroundColour('yellow')
            }}>Yellow</button>
            <button className="black" onClick={() => {
                setBackgroundColour('black')
            }}>Black</button>
            <button className="purple" onClick={() => {
                setBackgroundColour('purple')
            }}>Purple</button>
            <button className="green" onClick={() => {
                setBackgroundColour('green')
            }}>Green</button>
            <button className="blue" onClick={() => {
                setBackgroundColour('blue')
            }}>Blue</button>
            <button className="default" onClick={() => {
                setBackgroundColour('white')
            }}>Default</button>
        </div>
    )
}