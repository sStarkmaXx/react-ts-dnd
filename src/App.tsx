import React, { useState } from 'react';
import './App.css';
import EmptyWordBubbleConteiner from './components/EmptyWordBubbleConteiner';
import WordBubbleConteiner from './components/WordBubbleConteiner';

let mass: string = "Привет, меня зовут Макс!";
let translateMass = ["Hello", "my", "name", "is", "Max"];

const App: React.FC = ()=> {
  const [wordConteiners, setWordConteiners] = useState([
    {id: 1, items:[]},
    {id: 2, items:[{id:1, word:"Hello"},{id:2, word:"my"},{id:3, word:"name"},{id:4, word:"is"},{id:5, word:"Max"}]}
  ])
  return (
    <div className="App">
      <div className="mainText">Translate this sentence</div>
      <div className="head"></div>
      <div className="body"></div>
      <div className="bubble">{mass}</div>
      <div className="line"></div>
      <EmptyWordBubbleConteiner/>
      <WordBubbleConteiner translateMass={translateMass}/>
      <div className="button">Check</div>
    </div>
  );
}

export default App;
