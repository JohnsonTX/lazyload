import React,{Component} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
let yeomanImage = require('../images/hotCity.png');
const Main = (mysetting)=>{
  var setting={
       id:'',
       url:"",
       data:'',
       component:<div></div>,
       success:(state)=>{return state;},
       error:(state)=>{return state;}
  }
  var sendSet=Object.assign({},setting,mysetting);
  class Index extends Component{
    constructor(props){
      super(props);
      this.initState = (props,states)=>{
        var {state,localtion} = props;
        var {pathname,search} =localtion;
        return {setting:sendSet}
      }
      console.log(this)
    }

    render()
    {
    return(
      <div>
        <img src={yeomanImage} alt=""/>
        <Header />
        <div>hello;johnson</div>
        <sendSet.component />
       <Footer/>
    </div>
    )
  }
  }
  Index.defultProps={mysetting};
  return Index;
}

export default Main;
