import React from 'react';
import './Num.scss';

export default class Num extends React.Component{
	constructor(props) {
        super(props);
    }

    render(){
    	var num =visitors.replace(/(.)(?=[^$])/g,"$1,").split(",");
    	var li=num.map((n,i)=>{ return <li className="num-div" key={i}>{n}</li>})
    	return <ul className="num-list">
				{li}
    		   </ul>
    }
}