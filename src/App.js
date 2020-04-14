import React from 'react';
import './scss/App.scss';
import Home from './containers/Home';
import Header from './components/Header';


function App() {
  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12">
          <Header />  
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
