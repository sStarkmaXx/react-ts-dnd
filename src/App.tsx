import React, { useState } from 'react';
import './App.css';

import EmptyWordBubbleConteiner from './components/EmptyWordBubbleConteiner';
import WordBubbleConteiner from './components/WordBubbleConteiner';

let mass: string = "Привет, меня зовут Макс!";
let translateMass = ["Hello", "my", "name", "is", "Max"];

const App: React.FC = () => {
  const [wordConteiners, setWordConteiners] = useState([
    { id: 1, words: [] },
    { id: 2, words: [{ id: 1, word: "Hello" }, { id: 2, word: "my" }, { id: 3, word: "name" }, { id: 4, word: "is" }, { id: 5, word: "Max" }, { id: 5, word: "Max" }, { id: 5, word: "Max" }, { id: 5, word: "Max" }, { id: 5, word: "Max" }] }
  ])

  const [currentWordConteiner, setCurrentWordConteiner] = useState()

  const [currentWord, setCurrentWord] = useState()

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void {
    
  }

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, wordConteiner: { id: number; words: { id: number; word: string; }[]; }, item: { id: number; word: string; }): void {
    setCurrentWordConteiner(wordConteiner)
    setCurrentWord(item)
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
    
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, wordConteiner: { id: number; words: { id: number; word: string; }[]; }, item: { id: number; word: string; }): void {
    e.preventDefault();
    const currentIndex = wordConteiner.words.indexOf(item)
    wordConteiner.words.splice(currentIndex, 1)
    const dropIndex = wordConteiner.words.indexOf(item)
    wordConteiner.words.splice(currentIndex, 1)
  }

  return (
    <div className="App">
      <div className="mainText">Translate this sentence</div>
      <div className="head"></div>
      <div className="body"></div>
      <div className="bubble">{mass}</div>
      <div className="dndCont">
        {wordConteiners.map(wordConteiner =>
          <div className="wordConteiner">
            {wordConteiner.words.map(item =>
              <div
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, wordConteiner, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, wordConteiner, item)}
                draggable={true}
                className="wordBubble"
              >{item.word}</div>
            )}
          </div>
        )}
      </div>
      <div className="button">Check</div>
    </div>
  );
}

export default App;

function item(wordConteiners: { id: number; words: { id: number; word: string; }[]; }[], item: any): [any, any] {
  throw new Error('Function not implemented.');
}
