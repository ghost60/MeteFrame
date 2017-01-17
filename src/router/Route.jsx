//主面板
import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import {Grid, Row, Col}from '../components/grid/Grid';
import Nav from '../components/nav/Nav';
import Title from '../components/title/Title';

import Home from '../pages/Home';
import OOO from '../pages/orther3';

// import orther from '../pages/orther/Orther';
// import orthersession from '../pages/orther/OrtherSession';
import * as menudata from '../pages/menudata/menudata';

class Root extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return  <Grid>
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
                {this.props.children||<Home/>}
              </Row>
            </Grid>
  }
};

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const orther = {
  path: 'orther',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/orther/Orther').default)
    })
  }
}

const orther1 = {
  path: 'orther1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/orther1/Orther').default)
    })
  }
}

const orther2 = {
  path: 'orther2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/orther2/Orther').default)
    })
  }
}

const orther3 = {
  path: 'orther3',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/orther3').default)
    })
  }
}

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: Root,
    childRoutes: [
      orther,
      orther1,
      orther2,
      orther3
    ]
  }]
}

// 配置路由
// const RouteConfig = (
//   <Router history={hashHistory}>
//     <Route path="/" component={Root}>
//       <Route path="orther3" getComponent={getorther}>
//       </Route>
//     </Route>
//   </Router>
// );

// 配置路由
const RouteConfig = (
  <Router history={history} routes={rootRoute} />
);

export default RouteConfig;