import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './features/Home'
import Value from './features/Value'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/value/1">Value 1</Link></li>
            <li><Link to="/value/2">Value 2</Link></li>
            <li><Link to="/value/3">Value 3</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/value/:value" component={Value}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
