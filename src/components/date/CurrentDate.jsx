import React from 'react';
import './CurrentDate.css'
export default class CurrentDate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="news-date">
                <div className="news-date--day">{this.props.date.day}</div>
                <div className="news-date--month">{this.props.date.month}月</div>
            </div>
        )
    }
}
CurrentDate.defaultProps={
    date:{
        day:1,
        month:1
    }
}