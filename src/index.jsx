import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import axe from 'react-axe';
import App from './components/App';
import Theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

const renderApp = () => (
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
  ReactDOM.render(renderApp(), document.getElementById('root'));
} else {
  ReactDOM.render(renderApp(), document.getElementById('root'));
}
