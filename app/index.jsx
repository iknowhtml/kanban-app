import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore} from 'redux';
import reducer from './redux/reducers'
import actionCreator from './redux/actionCreators'

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

var initialState = JSON.parse(localStorage.getItem('state')) || {};

const store = createStore(reducer, initialState);

store.subscribe(() => {
localStorage.setItem('state', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app')
);
