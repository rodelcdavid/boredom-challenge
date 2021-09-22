import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './utils/GlobalStyles';


ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle/>
   
      <App />
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
