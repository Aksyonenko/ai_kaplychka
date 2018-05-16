import React, { Component } from 'react';
import './App.css';
import CustomInput from './components/CustomInput';
import StepsComponent from './components/StepsComponent';
import TextField from 'material-ui/TextField';
import PagesContainer from './pages/PagesContainer';


class App extends Component {


  render() {
    return (
      <div className="App">

        <PagesContainer />
      </div>
    );
  }
}

export default App;
