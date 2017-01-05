import React from 'react';
import './Summary.css'
export default class Summary extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      const backimg='./images/hsj.png';
      const backurl='url('+backimg+') no-repeat';
        return (
            <div className="news-top">
                <div className="news-top--title" style={{background:backurl}}>
                    {this.props.data.title}
                </div>
                <div className="news-top--summary">
                     {this.props.data.summary}
                </div>
            </div>
        )
    }
}