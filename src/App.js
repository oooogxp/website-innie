import React from 'react';
import './App.css';
// import Main from './components/Main';
// import Timeline from './components/Timeline';
// import Blog from './components/Blog';
// import About from './components/About';
// import Book from './components/Book';
import Three from './components/Three';
// import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        {/* <Main></Main>
        <Route path="/about"><About></About></Route>
        <Route path="/timeline"><Timeline></Timeline></Route>
        <Route path="/blog"><Blog></Blog></Route>
        <Route path="/book"><Book></Book></Route> */}
        <Three></Three>
      </div>
  );
}

export default App;