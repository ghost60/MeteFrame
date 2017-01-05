import React from 'react';
import { Link } from 'react-router'
import './NewsList.css'
import CurrentDate from '../../components/date/CurrentDate';

export default class NewsList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{"margin":8}}>
                <CurrentDate date={this.props.data.date} />
                <div className="news-linkTitle">
                    <Link to={`wordshow/党团建设/queryWord/${this.props.data.fileName.split('.')[0]}--1`}> 
                    {this.props.data.title}
                    </Link>
                </div>
            </div>
        )
    }
}