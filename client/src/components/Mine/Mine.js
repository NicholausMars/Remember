import React,{Component} from 'react';
import {Header} from '../Header';
import {SearchBar} from './SearchBar';
import MasterCards from './MasterCards';
import MasterForm from './MasterForm';
import { connect } from 'react-redux';
//* as actions
// must keep track of state


// dummy date
const dummy = [ {id:"kiss", title:"Toni", date:"november 2,2017"},
                {id:"love", title:"Parent", date:"september 4, 2013"},
                {id:"No", title:"Conflict", date:"september 16, 2018"},
                {id:"Dreams", title:"Realize", date:"March 14, 2018"}
            ];
class Mine extends Component{
ComponentDidMount(){
  // call to get information from the data base
  // There is also a redux life cycle method that can do this properly
}
// constructor(props){
//   super(props);
// }

 // update one mastercar

 render(){

   return (
     <div className="remember">
       <div className="header-box">
         <h1 className="heading__primary heading__primary--pink u-mt-sm ">Remember</h1>
       </div>
       < Header />
       <SearchBar/>
       <MasterForm/>
       <div className="master">
         <ul className="master__container">
          {
            dummy.map(elem =>
               <MasterCards
               key={elem.id}
               masterinfo={elem}
               visible={this.props.visible}
               />)
          }

         </ul>
       </div>
     </div>
   );
 }
}
const mapStateToProps = (state) => {
  return {
    test: state.test
  };
}

export default connect(mapStateToProps)(Mine);
  /*
    componentDidUpdate(){}
    @params prevProps, prevState, snapshot
  */
//ComponentWillUnMount(){}
