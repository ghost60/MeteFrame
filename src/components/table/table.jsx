import React from 'react'

import './table.scss'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            data: this.props.data
        }
    }
    setTrClass(i) {
        return this.state.currentIndex === i ? "tb-tr tb-tr__active" : "tb-tr"
    }
    componentWillReceiveProps(nextProps){
        this.setState({data:nextProps.data,currentIndex:nextProps.currentIndex})
    }
    render() {
        return (
            <table className="tb-container">
                <thead>
                    <tr className="tb-th">
                        {this.props.col.map((val, index) => {
                            return <th key={"table_" + index}>{val}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.state.data && this.state.data.map((val, index) => {
                        return (
                            <tr key={"table_" + index} className={this.setTrClass(index)}>
                                <td>{val.name}</td>
                                {val.info.map((val_td, index_td) => {
                                    return <td key={"table_td" + index_td}>{val_td}</td>
                                })}
                            </tr>)
                    })}
                </tbody>
            </table>


        )
    }
}

Table.defaultProps = {
    col: ["预报海域", "浪高", "浪级"],
    data:null
}