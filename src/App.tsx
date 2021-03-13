import React from 'react';
import './App.css';
import WordBubbleConteiner from './components/WordBubbleConteiner';

let mass: string = "Привет, меня зовут Макс!";
let translateMass = ["Hello", "my", "name", "is", "Max"];

const App: React.FC = ()=> {
  
  return (
    <div className="App">
      <div className="mainText">Translate this sentence</div>
      <div className="head"></div>
      <div className="body"></div>
      <div className="bubble">{mass}</div>
      <div className="line"></div>
      <WordBubbleConteiner translateMass={translateMass}/>
      <div className="emptyWordBubble"></div>
      <div className="button">Check</div>
    </div>
  );
}

export default App;
