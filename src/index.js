import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getMuiTheme, darkBaseTheme } from 'material-ui/styles';
import { initFirebase } from './config/firebaseConfig';

 
const AppWrapper = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

initFirebase();

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
