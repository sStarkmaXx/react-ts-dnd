import React from 'react';
import WordBubble from './WordBubble';
import classes from './WordBubbleConteiner.module.css';

const WordBubbleConteiner: React.FC<{translateMass:string[]}> = (props)=>{
    let getWord = props.translateMass.map(word =>{
        return(
            <div className={classes.wordCont}>
                <WordBubble word={word}/>
            </div>
        );
    })
    return(
        <div className={classes.wordBubbleConteiner}>
            {getWord}
        </div>
    );
}

export default WordBubbleConteiner;