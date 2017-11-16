/**
 * Created by johnsontx on 2017/11/10.
 */
/**
 * Created by johnsontx on 2017/11/9.
 */
import React,{Component,Proptypes} from 'react';
import {Tools} from "../Mytool"
import {render} from "react-dom";
import LazyLoad from 'react-lazy-load';
import '../styles/travel.css';
import $ from "../jquery.lazyload";

class Placehold extends Component{
  render(){
    return (
      <div>
        <img src="../images/hq.jpg" alt=""/>
        <img src="../images/yeoman.png" alt=""/>
      </div>
    )
  }
}
export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state={userdata:[]};
    this.addData=()=>{
      var url ='../userData.json',parms='';
      Tools.get(url,parms,(data)=>{
        var diff=JSON.stringify(this.state.userdata ) == JSON.stringify(data.userlist);
        if(diff && typeof data == "object"){
          this.setState({
            userdata:data.userlist.concat(this.state.userdata)
          })
        }
      });
    };
  }
  componentWillMount(){
    var url ='../userData.json',parms='';
    Tools.get(url,parms,(data)=>{
      if(typeof data == "object"){
        this.setState({
          userdata:data.userlist,
        })
      }
    })

  }

  render(){
    var cicle={color:"red",fontSize:"1rem",background:"blue"},dconten={width:736,margin: "0 auto"};
    var loading="../images/yeoman.png",n=1;
    var imgsr=(unm)=>{n++;return `../images/test/${unm}.jpg`}
    var im= function(num){n++; return<img className="lazy" src="../images/yeoman.png" data={imgsr(num)} alt="" />};
    var test= function(){
      var arr=[];
      for(let i=0;i<10;i++) {
        arr.push(im(i))
      }
        return <div>
        {arr.map((t,i)=>(
          <img src={loading} data-original={t.props.data} key={i} alt=""/>
        ))}
        </div>
      }
    ;
    return(
      <div>
        <LazyLoad height={200} placeholder={<Placehold/>}>
          <ul style={cicle} onClick={this.addData}>
            {this.state.userdata.map((t,i)=>(
              <li key={i}>
                <p>{t.userid}</p>
                <p>{t.name}</p>
              </li>
            ))}
          </ul>
        </LazyLoad>

          {test()}
        <footer classID="footer">
          <hgroup>
            <div className="filler" />

            <div className="filler" />
            <article className="basefix">
              <figure>
                <figcaption>
                  <mark className="icon foot-1"></mark>关于东航
                </figcaption>
                <ul>
                  <li><a href="http://www.ceair.com/about/zjdh/index.html" target="_blank">走进东航</a></li>
                  <li><a href="http://www.ceair.com/about/dhxw/index.html" target="_blank">东航资讯</a></li>
                  <li><a href="http://zhaopin.ceair.com/" target="_blank">东航招聘</a></li>
                  <li><a href="http://www.ceair.com/about/thlm/index.html" target="_blank">天合联盟</a></li>
                  <li><a href="http://www.ceair.com/about/flys/index.html" target="_blank">法律和隐私条款</a></li>
                </ul>
              </figure>
              <figure>
                <figcaption>
                  <mark className="icon foot-2"></mark>互动支持
                </figcaption>
                <ul>
                  <li><a href="http://www.ceair.com/about/lxwm/index.html" target="_blank">联系我们</a></li>
                  <li><a href="http://www.ceair.com/guide2/hycjwtjd/index.html" target="_blank">常见问题</a></li>
                  <li><a href="http://www.ceair.com/complaint/index.html" target="_blank">意见建议</a></li>
                  <li><a href="http://www.ceair.com/sitemap.html" target="_blank">网站导航</a></li>
                </ul>
                {test()}
              </figure>
              <figure>
                <figcaption>
                  <mark className="icon foot-3"></mark>友情链接
                </figcaption>
                <ul>
                  <li><a href="http://www.ceairgroup.com" target="_blank">中国东方航空集团公司</a></li>
                  <li><a href="http://www.shanghai-air.com" target="_blank">上海航空公司</a></li>
                  <li><a href="http://www.flycua.com" target="_blank">中国联航</a></li>
                  <li><a href="http://easternmiles.ceair.com/" target="_blank">东方万里行</a></li>
                </ul>
                {test()}
              </figure>
              <figure>
                <figcaption>
                  <mark className="icon foot-4"></mark>关注我们
                </figcaption>
                <div><a href="http://e.weibo.com/ceairdotcom" target="_blank">
                  <mark className="icon foot-sina" title="东航新浪微博"></mark></a><a href="http://www.ceair.com/talent.html" target="_blank">
                  <mark className="icon foot-talent" title="东航达人计划"></mark></a></div>
              </figure>
            </article>
          </hgroup>
          <div>
            <span>拉升空间的空间</span>
          </div>
        </footer>
        <img id="imgD" src="../images/yeoman.png" data-src="../images/hq.jpg" alt="" ref="imgData"/>

      </div>
    )
  }
  componentDidMount(){
    $(function() {
      $("img").lazyload({
        placeholder : "../images/yeoman.png",
        effect: "fadeIn"
      });
    });
  }
}
