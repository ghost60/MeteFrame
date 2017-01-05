import React from 'react';
import './FileInput.scss';

class FileInput extends React.Component{
  constructor(props) {
    super(props);
    this.state={value: ''};
  }
  handleChange(e){
    this.setState({value: e.target.value.split(/(\\|\/)/g).pop()});
    if (this.props.onChange) this.props.onChange(e);
  }
  render(){
    return  <input
                type='file'
                name={this.props.name}
                id={this.props.name}
                className='file'
                onChange={this.handleChange.bind(this)}
                accept={this.props.accept}
            />
  }
}

module.exports = FileInput;
