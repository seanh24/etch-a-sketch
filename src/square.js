import { useState,useEffect } from "react"

const Square = (props) => {
    const [active, setActive] = useState('transparent')

    useEffect(() => {
        if (props.clear === true) {
        setActive('transparent')
        }
    },[props])
    
    const handleEnter = (e) => {
        setActive(props.color)
    }

    let squareStyle = {
        backgroundColor: active
    }

    return (
        <div className="square" onMouseEnter={handleEnter} style={squareStyle}>

        </div>
    )
}

export default Square