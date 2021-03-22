import React from "react";
import classes from "./WordBubble.module.css";

const WordBubble: React.FC<{ key: number; onClick: any }> = (props) => {
  return <div className={classes.wordBubble}></div>;
};

export default WordBubble;
