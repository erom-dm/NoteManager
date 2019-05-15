import React from 'react';
import Notes from './component/Notes';
import Header from './component/Header';
import Snackbar from './component/Snackbar';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Notes />
    <Snackbar />
  </div>
);

export default App;
