//导航栏
import React from 'react';
import { Link, IndexLink } from 'react-router';
import './Nav.scss';
var nav_li = [];
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: -1,
            childUlClass: "nav-child--ul"
        }
    }
    removeCurrentIndex() {
        this.setState({ currentIndex: -1 })
    }
    renderTemple() {
        nav_li.length = 0;
        var navlist = this.props.navlist;
        var key_num = -1;
        for (var item_key in navlist) {
            key_num++;
            var child_li = [];
            var child_ul;
            var child_li_key = 0;
            for (var child_key in navlist[item_key].children) {
                var child_link = item_key + "/" + (!navlist[item_key].secFloor ? item_key + "Session/" :   "" ) + child_key;
                child_li.push(<li key={child_li_key}><Link dangerouslySetInnerHTML={{ __html: navlist[item_key].children[child_key].name} } to={child_link}></Link></li>)
                child_li_key++;
            }
            if (child_li.length > 0) {
                child_ul = <ul className={this.getChildUlClass(key_num)}>{child_li}</ul>;
            }
            if (key_num === 0) {
                nav_li.push(<div key={item_key} className="nav_li" >
                    <span>
                        <IndexLink to="/" activeClassName="nav__active">
                            {navlist[item_key].name}
                        </IndexLink>
                    </span>
                    {child_ul}
                </div>)
            }
            else {
                nav_li.push(<div key={item_key} className="nav_li" onMouseLeave={this.removeCurrentIndex.bind(this)} onMouseEnter={this.setCurrentIndex.bind(this, key_num)}>
                    <span >
                        <Link to={item_key} activeClassName="nav__active">
                            {navlist[item_key].name}
                        </Link>
                    </span>
                    {child_ul}
                </div>)
            }
            child_li = null;
            child_ul = null;
        }
        return nav_li
    }
    getChildUlClass(index) {
        return this.state.currentIndex === index ? "nav-child--ul ul-active" : "nav-child--ul"
    }
    setCurrentIndex(index) {
        this.setState({ currentIndex: index })
    }
    render() {
        return <div className="nav_body">{this.renderTemple()}</div>
    };
}
export default Nav;
/*
onMouseLeave={this.removeCurrentIndex.bind(this)} onMouseEnter={this.setCurrentIndex.bind(this, key_num)}



*/


  // <Link to={key} activeClassName="active">
                        //     {navlist[key].name}
                        // </Link>
 //     if (key_num == 0) {
        //         return <div className="nav_li" key={key_num}>
        //             <span>
        //                 <IndexLink to="/" activeClassName="active">
        //                     {list.name}
        //                 </IndexLink>
        //             </span>

        //         </div>
        //     } else {
        //         return <div className="nav_li" key={key_num}>
        //             <span>
        //                 <Link to={list.type} activeClassName="active">
        //                     {list.name}
        //                 </Link>
        //             </span>
        //         </div>
        //     }

        // }
        // const __list = this.props.navlist.map((list, i) => {
        //   var childListLi;

        //              childListLi = list.children.map((child, index) => {
        //                 return <li>{child.name}</li>
        //             })

        //         debugger
        //         var childListUl = <ul>{childListLi}</ul>


        //     if (i == 0) {
        //         return <div className="nav_li" key={list.id}>
        //             <span>
        //                 <IndexLink to="/" activeClassName="active">
        //                     {list.name}
        //                 </IndexLink>
        //             </span>

        //         </div>
        //     } else {
        //         return <div className="nav_li" key={list.id}>
        //             <span>
        //                 <Link to={list.type} activeClassName="active">
        //                     {list.name}
        //                 </Link>
        //             </span>
        //         </div>

        //     }
        // }
        // );