import React, {Component} from  'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MultipleCards from './MultipleCards/MultipleCards';
import {Landing} from './Landing/Landing';
import {MasterCard} from './MasterCard/MasterCard';
import {Mine} from './Mine/Mine';
import {More} from './More/More';
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
            {/* // test cases*/}
            <Route path='/test' component={test} />
            {/* // only shows up when user is creating a card*/}
            <Route path='/main/subcards' component={MultipleCards} />
            {/* // the main card section for the user
              onEnter is not working right now need to see what the possible error could be
              read that it was deprecated and so i found a next solution
              but the store did updated as needed it to so i have to go to creating a seperate component
              for the mine group page
                <Route path='/mine'  render={ ()=>{ TestMasterCards(); return <Mine /> } } />
              */}
            <Route path='/more'  component={More} />
            <Route path='/mine'  component={Mine} />
            {/* // shows the  section where the user can find most progress*/}
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
