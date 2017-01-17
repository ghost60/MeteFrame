import React from 'react';
import {
  Link
}
from 'react-router';
import {
  Col
}
from '../../components/grid/Grid';
import Session from '../../components/session/Session';
import * as menudata from '../../pages/menudata/menudata';


export default class orthersession extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() { 
  }
  componentWillReceiveProps(nextProps) {
  }
  render() {
    return  <Session lastname={"orther"}>
              <h1>其他页面2</h1>
            </Session>
  }
};




