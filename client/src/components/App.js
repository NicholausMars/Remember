import React, {Component} from  'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MultipleCards from './MultipleCards/MultipleCards';
import {Landing} from './Landing/Landing';
import MasterCard from './MasterCard/MasterCard';
import {Mine} from './Mine/Mine';
import {More} from './More/More';
import SmallCards from './SmallCards/SmallCards';
// import SimpleMap from './SimpleMap';
import anchor from '../img/SVG/anchor.svg';
// import  {TestMasterCards} from './route_callbacks.js';
//TEST
const test = () =>{
  return (
    <div>
    <img src={anchor} height="40px" alt="first use of svg in react"/>
    </div>
  );
}
//mastercard goes to the beginning card
// mastercard/subcards - goes to the sub card field
class App extends Component{
  render(){
    return(
        <Router>
        <div>
          <Switch>
            <Route path='/test' component={test} />
            <Route path='/main/subcards/:title' component={MultipleCards} />
            {/*SAME COMPONENT NEED TO FIND A WAY TO REUSE COMPONENT ON DIRECT TO ROUTE*/}
            <Route path='/smallcards/:idMaster'  component={SmallCards} />
            <Route path='/more'  component={More} />
            <Route path='/mine'  component={Mine} />
            <Route path='/main' component={MasterCard} />
            <Route path='/' component={Landing} />
          </Switch>
          </div>
        </Router>
      )
    };
}
// use redux methods to get all the master cards for the  OwnMasterCards and Group
// these two field are identical because the only show the mainCard which are 200px width and 100px hight
export default App;

 // <Route path='/nav' component={Header} />
// <Route path='/map' component={SimpleMap} />
// <Route path='/map' component={SimpleMap} />
