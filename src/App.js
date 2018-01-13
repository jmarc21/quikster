import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import routes from './route';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header className='header'/>
        <div  className='routes'>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
