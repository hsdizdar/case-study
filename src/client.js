import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { MatchProvider } from './context/MatchContext';

import './styles/styles.scss';

const jsx = (
  <MatchProvider>
    <App />
  </MatchProvider>
);

const app = document.getElementById('root');
ReactDOM.hydrate(jsx, app);
