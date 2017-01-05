import React from 'react';
import './Session.scss';

class session extends React.Component{
  constructor(props) {
      super(props);
  }
  render() {
      return  <div className="session_body">
                <div className="session_title">
                    <span className="session_lastname">{this.props.lastname}</span>
                    <span className="session_name">{this.props.name}</span>
                </div>
                <div className="session_content">
                   {this.props.children}
                </div>
              </div>
      }
};
export default session;
