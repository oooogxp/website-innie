import React from 'react';
import './App.css';
import Title from './components/Title';
import Blog from './components/Blog';
import Entertains from './components/Entertains';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title></Title>
        <Route path="/blog"><Blog></Blog></Route>
        <Route path="/entertains"><Entertains></Entertains></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;