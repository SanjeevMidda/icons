import './index.css';
import leftArrow from "./icons/left.svg";
import rightArrow from "./icons/right.svg";
import { useState } from 'react';

function App() {

  let icons = ["🐭", "🐹", "🍦", "🌎", "💋", "🍰", "✈️", "🎉", "🏔️", "🌙", "❤️", "🗺️"];
  let image = newIcon();

  function newIcon(){
    return <div className='newIcon'>{icons[Math.floor(Math.random()* icons.length)]}</div>
  }


  const [state, setState] = useState(image);

 

  return (
    <div className="App">
      <div className="name">
        <h3>ICONS</h3>
      </div>

      <div className="icons">
        <img src={leftArrow} alt="left arrow" onClick={() => setState(newIcon())}/>
        {
          <h1 className="iconPicked">{state}</h1>
        }
        <img src={rightArrow} alt="right arrow" onClick={() => setState(newIcon())}/>
      </div>
    </div>
  );
}

export default App;
