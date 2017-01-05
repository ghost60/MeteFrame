import React from 'react';
import './Tabs.css'

//tab主体
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }
    handleControlClick(e) {
        if (e.target && e.target.nodeName == "LI") {
            this.setState({ currentIndex: parseInt(e.target.id, 10) })
        }
    }
    getControlTabClass(index) {
        return this.state.currentIndex === index ? "tab-li tab-li__active" : "tab-li";
    }
    getControlTabImg(index, element) {
        return this.state.currentIndex === index ? element.props.imgSrc + "_on.png" : element.props.imgSrc + "_off.png";
    }
    getPanelClass(index) {
        return this.state.currentIndex === index ? "tab-panel tab-panel__active tab-panel__in" : "tab-panel";
    }
    setImg(index, element) {
        if (element.props.imgSrc) {
            return <img src={this.getControlTabImg(index, element)} style={{ "height": "20px" }} />
        }
    }
    render() {
        return (
            <div className="tab-container">
                {/*Tab 导航栏*/}
                <ul onClick={this.handleControlClick.bind(this)} className="tab-ul">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return <li className={this.getControlTabClass(index)} id={index}>
                                {this.setImg(index, element)}
                                {element.props.name}
                            </li>
                        })
                    }
                </ul>
                {/*Tab panel*/}
                <div className="tab-panel--container">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return <div className={this.getPanelClass(index)}>{element}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export class TabContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default Tabs;
