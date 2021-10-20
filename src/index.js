import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import { store } from './redux/store';

import {HashRouter} from 'react-router-dom';

render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
  document.getElementById('root')
);
