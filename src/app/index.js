import {createStore}from 'redux'
import {Provider}from 'react-redux';
import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import route from '../Router/route';
import store from '../Redux/store';

render((<h1>页头</h1>), document.getElementById('head'));
render((<h1>页尾</h1>), document.getElementById('foot'));

render((
  <Provider store={store}>
    {route}
  </Provider>
), document.getElementById('content'));