import React, { Component } from 'react';
import './App.css';
import CustomInput from './components/CustomInput';
import StepsComponent from './components/StepsComponent';
import TextField from 'material-ui/TextField';
import PagesContainer from './pages/PagesContainer';
import Layout from './components/Layout/Layout';

class App extends Component {


  render() {
    return (
      <Layout>
        <PagesContainer />
      </Layout>
    );
  }
}

export default App;
