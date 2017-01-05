import React, { Component } from 'react';

export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { count, item, istext } = this.props;
    let width = 100 / count + '%';
    let height = {height:this.props.height};
    let textpanel = istext?(<div className="SliderItem-textpanel">
        <span>{item.title}</span>
        </div>):null;
    return (
      <li className="slider-item" style={{width: width}}>
        <img src={item.path} alt={item.title} style={height}/>
        {textpanel}
      </li>
    );
  }
}
