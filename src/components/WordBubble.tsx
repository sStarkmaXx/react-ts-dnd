import React from 'react';
import './WordBubbleModule.css';

const WordBubble: React.FC<{word:string}> = (props) =>{
    return(
        <div className="wordBubble">{props.word}</div>
    );
}

export default WordBubble;