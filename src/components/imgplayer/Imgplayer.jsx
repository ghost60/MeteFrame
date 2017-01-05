import React from 'react';
import {Row,Col} from '../../components/grid/Grid';
import './Imgplayer.scss';
var c;
var length;
var now=0;

class imgplayer extends React.Component{ 
    constructor(props) {
        super(props);
        this.state=({imgurl:'',data:this.props.data,play:'播放',likey:'li0'});
    } 
    componentDidMount(){
        if (!!this.props.data.content && this.props.data.content.length>0) {
            let url = this.props.data.url + this.props.data.content[0];
            this.setState({imgurl:url,data:this.props.data});
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!!nextProps.data.content && nextProps.data.content.length>0) {
            let url = nextProps.data.url + nextProps.data.content[0];
            this.setState({imgurl:url,data:nextProps.data});
        }
    }
    liClick(e){
        let url = this.props.data.url + e.target.dataset.liname;
        this.setState({imgurl:url,likey:e.target.dataset.likey}); 
    }
    playClick(){
        if (this.state.play==='播放') {
            length = this.state.data.content.length;        
            c = setInterval(() => {
                this.play();
            }, 1500); 
        }else{
            window.clearInterval(c);
            this.setState({play:'播放'});
        }
    }
    play(){
        now++;
        if (now>length-1) {
            now=0;
        }
        let url = this.state.data.url + this.state.data.content[now];
        this.setState({imgurl:url,play:'暂停',likey:'li'+now});
    }
    componentWillUnmount(){
        window.clearInterval(c);
    }
    render() {
        if (!!this.state.imgurl) {
            return  <Row>
                        <Col>
                            <Imgshow url={this.state.imgurl}/>
                        </Col>
                        <Imglist likey={this.state.likey} play={this.state.play} list={this.props.data.content} callback={this.liClick.bind(this)} playClick={this.playClick.bind(this)}/>
                    </Row>
        }else{
            return <div><span>无数据</span></div>;
        }         
    }     
};

class Imglist extends React.Component{ 
    constructor(props) {
        super(props);
    }    
    liactive(key){
        if(key===this.props.likey){
          return "Imglist_li active";
        }else{
          return "Imglist_li";
        }
    }
    render() { 
        const list = this.props.list.map((li,i) => {
                var lin=li.split('_');
                var lina=lin[lin.length-1];
                var linam=lina.split('.');
                var liname=linam[0];
                return  <li className="Imglist_li" className={this.liactive('li'+i)} key={i} data-likey={'li'+i} data-liname={li} onClick={this.props.callback}>
                            {liname}
                        </li>
                    }
        );
        return  <div className="Imglist_body">
                    <span className="Imglist_title">选择图片</span>
                    <span className="Imglist_button" onClick={this.props.playClick}><span></span>{this.props.play}</span>
                    <span className="Imglist_ul">   
                        {list}               
                    </span>
                </div>
    }     
};

class Imgshow extends React.Component{ 
  constructor(props) {
        super(props);
    }    
    render() {
        return  <div style={{width: "100%",display:"inline-block",padding:"20px"}}>
                  <img src={this.props.url} style={{width:"100%"}}/>
                </div>
    }     
};
export default imgplayer;
 