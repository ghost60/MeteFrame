import React from 'react';
import './Title.scss';

class Title extends React.Component{
  constructor(props) {
      super(props);
  }
  render() {
      const backimg=this.props.backimg;
      const backurl='url('+backimg+') no-repeat';
      return  <div className="title_body" style={{background:backurl,marginTop:10}}>
                <span>{this.props.text}</span>
              </div>
      }
};

Title.defaultProps = {
    backimg:'',
}

export default Title;
