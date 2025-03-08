import React from 'react';
import './App.css';

function App() {
  return (
    <div className="feedback-widget-wrapper">
      <button onClick={()=> alert("Feedback added yayyyy !!")}>Add feedback</button>
    </div>
  );
}

export default App;
