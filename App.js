import React, {useState} from 'react';
import TodoList from './components/TodoList' // Correcting the import path

import './App.css';



function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
