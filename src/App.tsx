import React, { useState } from 'react';
import './App.css';

import EmptyWordBubbleConteiner from './components/EmptyWordBubbleConteiner';
import WordBubbleConteiner from './components/WordBubbleConteiner';

let mass: string = "Привет, меня зовут Макс!";
let translateMass = ["Hello", "my", "name", "is", "Max"];

const App: React.FC = () => {
  const [wordConteiners, setWordConteiners] = useState([
    { id: 1, words: [] },
    { id: 2, words: [{ id: 1, word: "Hello" }, { id: 2, word: "my" }, { id: 3, word: "name" }, { id: 4, word: "is" }, { id: 5, word: "Max" }] }
  ])

  interface IwordConteiner {
      id:number,
      words:{
        id:number,
        word:string}[]
  }
  interface Iitem{
    id: number,
    word: string
  }
  const [currentWordConteiner, setCurrentWordConteiner] = useState<IwordConteiner>({id:0,words:[{id:0,word:"asd"}]})

  const [currentWord, setCurrentWord] = useState<Iitem>({id:0,word:"asd"})

  function dragOverHandler(event: React.DragEvent<HTMLDivElement>): void {
    debugger
    event.preventDefault();
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void {
    
  }

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, wordConteiner: IwordConteiner, item: Iitem): void {
    setCurrentWordConteiner(wordConteiner)
    setCurrentWord(item)
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
    
  }

  

  function dropHandler(e: React.DragEvent<HTMLDivElement>, wordConteiner:IwordConteiner, item: Iitem): void {
    debugger
    e.preventDefault();
    const currentIndex = currentWordConteiner.words.indexOf(currentWord)
    currentWordConteiner.words.splice(currentIndex, 1)
    const dropIndex = wordConteiner.words.indexOf(item)
    wordConteiner.words.splice(dropIndex+1, 0, currentWord)
    setWordConteiners(wordConteiners.map(b=>{
      if(b.id === wordConteiner.id){
        return wordConteiner
      }
      if(b.id === currentWordConteiner.id){
        return currentWordConteiner
      }
      return b
    }))
  }

  function dropWordConteinerHandler(e: React.DragEvent<HTMLDivElement>, wordConteiner: { id: number; words: { id: number; word: string; }[]; }): void {
    wordConteiner.words.push(currentWord)
    const currentIndex = currentWordConteiner.words.indexOf(currentWord)
    currentWordConteiner.words.splice(currentIndex, 1)
    setWordConteiners(wordConteiners.map(b=>{
      if(b.id === wordConteiner.id){
        return wordConteiner
      }
      if(b.id === currentWordConteiner.id){
        return currentWordConteiner
      }
      return b
    }))
  }

  return (
    <div className="App">
      <div className="mainText">Translate this sentence</div>
      <div className="head"></div>
      <div className="body"></div>
      <div className="bubble">{mass}</div>
      <div className="dndCont">
        {wordConteiners.map(wordConteiner =>
          <div 
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropWordConteinerHandler(e, wordConteiner)}
            className="wordConteiner">
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




