//主面板
import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore
}
from 'redux'
import {
  Provider
}
from 'react-redux';

import reducer from './reducers';

import {
  Router, Route, Link, hashHistory, browserHistory, IndexRoute, Redirect, IndexLink
}
from 'react-router';
import withBasename from '../components/basename/basename';
import {
  Grid, Row, Col
}
from '../components/grid/Grid';
import Nav from '../components/nav/Nav';
import Title from '../components/title/Title';

import Home from '../pages/home/Home';
import Footer from '../pages/footer/Footer';

import orther from '../pages/orther/Orther';
import orthersession from '../pages/orther/OrtherSession';

import * as menudata from '../pages/menudata/menudata';

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return <Grid>
      <Row>
        <Col>
          <Title backimg={'./images/titleback.png'} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav navlist={menudata.navlist} />
        </Col>
      </Row>
      <Row><div style={{ height: 20 }}></div></Row>
      <Row>
        {this.props.children || (<Home />)}
      </Row>
    </Grid>
  }
};

ReactDOM.render((<h1>页头</h1>), document.getElementById('head'));
ReactDOM.render((<h1>页尾</h1>), document.getElementById('foot'));

// 配置路由
ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/" component={App}>
        <Route path="orther" component={orther}>
          <Route path="orthersession/:cid" component={orthersession} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'));