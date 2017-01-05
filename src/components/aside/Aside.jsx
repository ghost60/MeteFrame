//导航栏
import React from 'react';
import { Link } from 'react-router'
import * as menudata from '../../pages/menudata/menudata';
import './Aside.scss';

var aside_content;
class aside extends React.Component {
    constructor(props) {
        super(props);
        var cidSplit=[];
        var cid = 0;
        if (this.props.cid) {
            cidSplit = this.props.cid.split("_");
        }
        if (cidSplit.length > 1) {
            cid =this.props.link? menudata.navlist[this.props.parent].children[this.props.link].children[cidSplit[0]].id:
             menudata.navlist[this.props.parent].children[cidSplit[0]].id;
        }
        this.state = { name: '', currentIndex: cid };
    }
    asideParentTitleClick(index, name) {
        this.setState({ currentIndex: index, name: name });
    }
    getAsideChildUlCls(index) {
        return this.state.currentIndex === index ? "aside-ul aside-child-ul aside-child-ul__active" : "aside-ul aside-child-ul";
    }
    updateaside(tprops) {
        // debugger aside-child-ul__active
        var list_item = [];
        var ul_item = [];
        var product = menudata.navlist[tprops.parent];
        var list = product.secFloor ? product.children[tprops.link].children : product.children;//子项目
        var list_child_item = [];
        var child_link = "";
        for (var item_key in list) {
            if (list[item_key].children) {
                for (var item_child_key in list[item_key].children) {
                    child_link = tprops.parent + "/" + (!product.secFloor ? tprops.parent + "Session/" : tprops.link + "/" + tprops.link + "Session/") + item_child_key;
                    list_child_item.push(<li className="aside-child-li" key={"child_" + item_key + "_" + item_child_key}><Link to={child_link} activeClassName="aside__active">{list[item_key].children[item_child_key].name}</Link></li>);
                }
                list_item.push(<li key={item_key} className="aside-parent-li"><div className="aside-parent-title" onClick={this.asideParentTitleClick.bind(this, list[item_key].id, list[item_key].name.replace('<br/>',''))}><Link activeClassName="aside__active">{list[item_key].name}</Link></div><ul className={this.getAsideChildUlCls(list[item_key].id)}>{list_child_item}</ul></li>);
                list_child_item = [];
            }
            else {
                //侧边栏一级路由
                child_link = tprops.parent + "/" + (!product.secFloor ? tprops.parent + "Session/" : tprops.link + "/" + tprops.link + "Session/") + item_key;
                list_item.push(<li key={item_key} className="aside-parent-li"><div className="aside-parent-title"><Link to={child_link} activeClassName="aside__active">{list[item_key].name.replace('<br/>','')}</Link></div></li>)
            }
        }
        ul_item.push(<ul className="aside-ul aside-parent-ul" key={'aside_ul'}>{list_item}</ul>)
        list_item = null;
        return ul_item
    }
    componentDidMount() {
        // this.updateaside(this.props);
        var name =this.props.link? menudata.navlist[this.props.parent].children[this.props.link].name:
        menudata.navlist[this.props.parent].name;//一级中文名与路由同名
        this.setState({ name: name });
    }
    getContent() {
        return aside_content
    }
    componentWillReceiveProps(nextProps) {
        // this.updateaside(nextProps);
    }
    render() {
        return <div>
            <div className="aside_title">{this.state.name}</div>
            <div className="aside_list">
                {this.updateaside(this.props)}
            </div>
        </div>
    }
};

export default aside;
//<ReactCSSTransitionGroup key={"animate_" + i} component="div" transitionName="asideAnimate" transitionAppear={false} transitionAppearTimeout={300000} transitionEnterTimeout={300} transitionLeaveTimeout={300} style={{height:"100%"}}><ul className={this.getAsideChildUlCls(i)}>{list_child_item}</ul></ReactCSSTransitionGroup>