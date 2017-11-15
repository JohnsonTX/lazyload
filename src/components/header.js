/**
 * Created by johnsontx on 2017/11/9.
 */
import React,{Component,Proptypes} from 'react';
import {render} from "react-dom";

export default class Header extends Component{
  render(){
    return(
       <div>
         <header className="header">
             <figure className="dropdown">
               <figcaption>销售服务热线:<span>95530-1-6</span></figcaption>
               <div className="body workTime">服务时间：每周一至周日<span className="w_time">8:00-24:00</span></div>
             </figure>
             <figure className="link"><a href="http://eb.ceair.com/FeedBack/pc/index.html" target="_blank">用户体验反馈</a></figure>
             <figure className="link"><a href="http://onlinecsr.ceair.com:8000/robot-dh/" target="_blank">在线客服</a></figure>
             <figure className="link"><a href="http://www.ceair.com/a/mobile_e.html" target="_blank">移动端</a></figure>
             <figure className="dropdown">
               <figcaption>微信</figcaption>
               <div className="body image"></div>
             </figure>
             <figure className="link"><a href="http://weibo.com/ceaircom" target="_blank">微博</a></figure>
               <div className="body text"><span className="clearfix links"><a target="_blank" href="http://www.ceairgroup.com">中国东方航空集团公司</a><a target="_blank" href="http://www.shanghai-air.com">上海航空公司</a><a target="_blank" href="http://shopping.ceair.com/">东方万里行积分商城</a><a target="_blank" href="http://easternmiles.ceair.com/">东方万里行</a><a target="_blank" href="http://www.flycua.com/ ">中国联航</a><a target="_blank" href="http://www.skyteam.com/">天合联盟</a><a target="_blank" href="http://www.c3q.com.cn">东航云南</a><a target="_blank" href="http://www.ceairdutyfree.com/">机上免税品预订</a><a target="_blank" href="http://kas.ceair.com/">集团客户</a><a target="_blank" href="http://ceagent.ceair.com/">代理人系统</a><a target="_blank" href="http://www.greaterchinaconnection.com/">大中华携手飞</a></span></div>
         </header>
       </div>
    )
  }
}
