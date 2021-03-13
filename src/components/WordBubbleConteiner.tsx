import React from 'react';
import WordBubble from './WordBubble';
import './WordBubbleConteinerModule.css';

const WordBubbleConteiner: React.FC<{translateMass:string[]}> = (props)=>{
    let getWord = props.translateMass.map(word =>{
        return(
            <div className="wordCont">
                <WordBubble word={word}/>
            </div>
        );
    })
    return(
        <div className="wordBubbleConteiner">
            {getWord}
        </div>
    );
}

export default WordBubbleConteiner;