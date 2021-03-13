import React from 'react';
import './App.css';

const App: React.FC = ()=> {
  return (
    <div className="App">
      <div className="mainText">Translate this sentence</div>
      <div className="head"></div>
      <div className="body"></div>
      <div className="bubble"></div>
      <div className="line"></div>
      <div className="wordBubble"></div>
      <div className="emptyWordBubble"></div>
      <div className="button">Check</div>
    </div>
  );
}

export default App;
