
export function Generator({inputNumber}) {
    const output= generateOutput(inputNumber)
    
    return (
        <div className="output">
            {output}
        </div>
    )
}

function generateOutput(inputNumber) {
    const words = [
        "entrepreneur",
        "builds",
        "innovative",
        "solutions",
        "to",
        "address",
        "global",
        "challenges",
        "and",
        "opportunities"
    ];
    let result= ''

    for(let i=0; i<inputNumber; i++){
        if(result !== ''){
            result += " "
        }
        result += words[Math.floor(Math.random() * words.length)]
    }

    return result
}