import React from 'react';
import './App.css';
import Main from './components/Main';
import Blog from './components/Blog';
import About from './components/About';
import Book from './components/Book';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main></Main>
        <Route path="/about"><About></About></Route>
        <Route path="/blog"><Blog></Blog></Route>
        <Route path="/book"><Book></Book></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;