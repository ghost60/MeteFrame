//导航栏
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import './LineChart.scss';

let defaultCfg = {
    global:{
        useUTC:false
    },
    chart: {
        type: 'spline',
        reflow: true,
        height: 200,
    },
    credits: {
        enabled: false
    },
    title: {
        text: null,
        x: -20 //center
    },
    subtitle: {
        text: '',
        x: -20
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: null
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    }
    ,
    tooltip: {
        valueSuffix: ""
    }
    ,
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [
        {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
    ]
}
class LineChart extends React.Component {
    constructor(props) {
        super(props);
        for (var key in this.props.config) {
            defaultCfg[key] = this.props.config[key];
        }
        this.state = {
            defaultCfg: defaultCfg
        }
    }
    componentDidMount() {
        //  var s = this.refs.chart.getChart()
        //  debugger
        //  s.options.global.useUTC = false
    }

    componentWillReceiveProps(nextProps) {
        for (var key in nextProps.config) {
            defaultCfg[key] = nextProps.config[key];
        }
        this.setState({
            defaultCfg: defaultCfg
        })
    }
    render() {
        return <ReactHighcharts ref="chart" config={this.state.defaultCfg} ref="chart"></ReactHighcharts>
    }
};

export default LineChart;
