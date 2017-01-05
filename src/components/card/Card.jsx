import React from 'react';
import {Link} from 'react-router';
import './Card.scss';

class CardHasIcon extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return  <div className="card-body" style={this.props.card_body}>
                    <div className="card-title" style={this.props.card_title}>
                        <span className="card-title-icon"><img src={this.props.icon_url}/></span>
                        <span className="card-title-text">{this.props.title}</span>
                        <span className="card-title-more">
                            <Link to={this.props.morelink}>
                            <img src={this.props.more_img}/>
                            </Link>
                        </span>
                    </div>
                    <div className="card-content" style={this.props.card_content}>
                        {this.props.children}
                    </div>
                </div>
        }
};

export default CardHasIcon;
