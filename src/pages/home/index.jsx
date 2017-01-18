//主页
import React,{PropTypes} from 'react';
import { connect } from 'react-redux'
import { addAction,rddAction,chAction,getDataAction} from '../../redux/action';
// import './Home.css';
import { Grid, Row, Col } from '../../components/grid/Grid';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  <Row style={{ minHeight: "604px", marginTop: "20px" }}>   
              <Counter/>
              <Brother/>
              <GetData url="http://www.pm25.in/api/querys/pm2_5.json" postData="city=chengdu&token=5j1znBVAsnSf5xQyNQyq" />
            </Row>
  }
};

//计数示例
class Counter extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onRddClick: PropTypes.func.isRequired,
    chClick: PropTypes.func.isRequired,    
  }
  render() {
    const { value, onAddClick, onRddClick, chClick} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onAddClick}>+</button>
        <button onClick={onRddClick}>-</button>
        <button onClick={chClick}>修改兄弟组件的数据</button>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    value: state.counter
  }
};
function mapDispatchToProps(dispatch,ownProps) {
  return {
    onAddClick: () => dispatch(addAction()),
    onRddClick: () => dispatch(rddAction()),
    chClick: () => dispatch(chAction())
  }
};

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// })

Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


//兄弟组件数据流示例
class Brother extends React.Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <span>{data}</span>
      </div>
    )
  }
};

function mapStateToProps2(state) {
  return {
    data: state.brother.data
  }
};
Brother = connect(
  mapStateToProps2
)(Brother);


//异步请求数据流示例
class GetData extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    ongetDataClick: PropTypes.func.isRequired,   
  }
  render() {
    const { data, isFetching, ongetDataClick} = this.props
    return (
      <div>
        <span>{isFetching.toString()}</span>
        <span>{data.init}</span>
        <span>{JSON.stringify(data)}</span>        
        <button onClick={ongetDataClick}>请求数据</button>
      </div>
    )
  }
};


function mapStateToProps3(state) {
  return {
    data: state.getdata.data,
    isFetching:state.getdata.isFetching
  }
};
function mapDispatchToProps3(dispatch,ownProps) {
  return {
    ongetDataClick: () => dispatch(getDataAction(ownProps.url,ownProps.postData))
  }
};

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// })

GetData = connect(
  mapStateToProps3,
  mapDispatchToProps3
)(GetData);