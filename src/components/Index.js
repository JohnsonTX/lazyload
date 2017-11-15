/**
 * Created by johnsontx on 2017/11/10.
 */
import React,{Component} from "react";
import Main from "../components/Main";

class Index extends Component{
  constructor(props){
    super(props);
    this.initState= (props,state)=>{
      var {state, location} = props;
      console.log(state)
    }
  }
  render(){
    return(
      <div className="content">
        <div className="indexLeftNav">
          <div className="ilfnbox">
            <dl className="mainNav">
              <dd>
                <div className="ilfContent"><span className="navIco Ico1"></span><span className="arrow"></span>
                  <div className="bigTitle">主题游</div>
                  <div className="childNav"><a>邮轮</a><a>亲子</a><a>情侣</a><a>海岛游</a></div>
                </div>
              </dd>
              <dd>
                <div className="ilfContent"><span className="navIco Ico2"></span><span className="arrow"></span>
                  <div className="bigTitle">国内旅游</div>
                  <div className="childNav"><a>北京</a><a>上海</a><a>广州</a><a>哈尔滨</a></div>
                </div>
              </dd>
              <dd>
                <div className="ilfContent"><span className="navIco Ico3"></span><span className="arrow"></span>
                  <div className="bigTitle">港澳台 日韩</div>
                  <div className="childNav"><a>香港</a><a>澳门</a><a>台湾</a><a>济州岛</a></div>
                </div>
              </dd>
              <dd>
                <div className="ilfContent"><span className="navIco Ico4"></span><span className="arrow"></span>
                  <div className="bigTitle">东南亚</div>
                  <div className="childNav"><a>普吉</a><a>清迈</a><a>沙巴</a><a>巴厘岛</a></div>
                </div>
              </dd>
              <dd>
                <div className="ilfContent"><span className="navIco Ico5"></span><span className="arrow"></span>
                  <div className="bigTitle">欧美</div>
                  <div className="childNav"><a>普吉</a><a>清迈</a><a>沙巴</a><a>巴厘岛</a></div>
                </div>
              </dd>
              <dd>
                <div className="ilfContent"><span className="navIco Ico6"></span><span className="arrow"></span>
                  <div className="bigTitle">澳新中东非</div>
                  <div className="childNav"><a>悉尼</a><a>迪拜</a><a>帕劳</a><a>新西兰</a></div>
                </div>
              </dd>
            </dl>
            <div className="indexLeftNavContent">
              <div className="ilNavContent NavBlock clearfix">
                <dl className="towNav">
                  <dt>二级字段(主题游)</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
              </div>
              <div className="ilNavContent clearfix">
                <dl className="towNav">
                  <dt>二级字段（国内旅游）</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
              </div>
              <div className="ilNavContent clearfix">
                <dl className="towNav">
                  <dt>二级字段（港澳台）</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
              </div>
              <div className="ilNavContent clearfix">
                <dl className="towNav">
                  <dt>二级字段（东南亚）</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
              </div>
              <div className="ilNavContent clearfix">
                <dl className="towNav">
                  <dt>二级字段（欧美）</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段<a>三级字段</a><a>三级字段</a><a>三级字段</a></a></dd>
                </dl>
              </div>
              <div className="ilNavContent clearfix">
                <dl className="towNav">
                  <dt>二级字段（澳新中东非）</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
                <dl className="towNav">
                  <dt>二级字段</dt>
                  <dd className="clearfix"><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a><a>三级字段</a></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main({
   id:"index",
   component:Index,
  url:"topics",
  data:(props,state)=>{
    return {props:props,state:state}
  },
  success:(state)=>{return state},
  error:(state)=>{return state}
})
