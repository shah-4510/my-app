
import './App.css';
import React, {Component} from 'react';
import Series from '../../conatiners/Series';

class App extends Component{

  render() {
    return (
    <div className="App">
      <header className="App-header">
       <h1>TV Series List</h1>
      </header>
      <Series/>
    </div>
  );
 }
}

export default App;

//state is a plain js obj to which your component reacts and render