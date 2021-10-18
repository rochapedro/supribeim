import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyled } from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
