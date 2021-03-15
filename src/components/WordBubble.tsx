import React from 'react';
import classes from './WordBubble.module.css';

const WordBubble: React.FC<{word:string}> = (props) =>{
    return(
        <div className={classes.wordBubble} draggable={true}>{props.word}</div>
    );
}

export default WordBubble;