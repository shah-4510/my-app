
import './App.css';
import React, {Component} from 'react';
import 'whatwg-fetch';
import Main from '../Main';

class App extends Component{

  render() {
    return (
    <div className="App">
      <header className="App-header">
       <h1 className='App-title'>TV Series List</h1>
      </header>
      <Main/>
    </div>
  );
 }
}

export default App;

//state is a plain js obj to which your component reacts and render