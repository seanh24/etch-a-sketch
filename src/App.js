import { useEffect, useState } from 'react';
import './App.css';
import Square from './square';

function App() {
  const [gridSize, setGridSize] = useState(25);
  const [color, setColor] = useState('black');
  const [clear, setClear] = useState(false);

  const handleInput = (e) => {
    setGridSize(e.target.value)
    setClear(true)
  }

  const createGridArray = (num) => {
    let arr = [];
    for (let i = 0; i < num*num; i++) {
      arr.push(i);
    }
    return arr
  }
  let gridArray = createGridArray(gridSize);

  const makeGridStyleArray = (num) => {
    let arr = [];
    for (let i=0; i < num; i++){
      arr.push('1fr')
    }
    return arr.join(' ')
  }

  let gridStyleArray = makeGridStyleArray(gridSize)
  
  const gridStyle = {
    gridTemplateColumns: gridStyleArray,
  }

  const handleClear = () => {
    setClear(true)
  }

  useEffect(() => {
    setClear(false)
  },[clear])

  const handleColor = (e) => {
    setColor(e.target.value)
  };

  return (
    <div className="App">
      <div className="body">
        <h1>Etch-a-Sketch</h1>
        <div className="container">
          <div className="button-box">
            <button className="black" value='black' onClick={handleColor}>Black</button>
            <button className="red" value='red' onClick={handleColor}>Red</button>
            <button className="green" value='green' onClick={handleColor}>Green</button>
            <button className="blue" value='blue' onClick={handleColor}>Blue</button>
            <button className="clear" onClick={handleClear}>Clear</button>
          </div>
          <div className="grid-slider">
            <div className='grid-container' style={gridStyle}>
              {gridArray.map((id) => {
                return (
                  <Square clear={clear} key={id} color={color}/>
                )
              })}
            </div>
            <input type='range' min='1' max='100' value={gridSize} onChange={handleInput}/>
            {gridSize} x {gridSize}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
