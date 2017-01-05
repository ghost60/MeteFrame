import React from 'react';
import './Visitors.scss';
import Num from './Num';

export default class Visitors extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){
    	return <div className="visitors-body">
		    		<span>到访</span>
					<Num/>
		    	</div>
    }
}