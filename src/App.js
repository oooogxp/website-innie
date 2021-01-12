import React from 'react';
import './App.css';
import Title from './components/Title';
import Blog from './components/Blog';
import About from './components/About';
import Book from './components/Book';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title></Title>
        <Route path="/about"><About></About></Route>
        <Route path="/blog"><Blog></Blog></Route>
        <Route path="/book"><Book></Book></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;