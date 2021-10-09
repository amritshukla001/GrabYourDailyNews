import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News
                key="home"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Sports">
              <News
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/Business">
              <News
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/Science">
              <News
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Health">
              <News
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            {/* <Route exact path="/General">
              <News key="general" pageSize={this.pageSize} country="us" category="general" />
            </Route> */}
            <Route exact path="/Technology">
              <News
                key="technology"
                pageSize={this.pageSize}
                country="us"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
/* (class based component short-cut: rcc 
  function based component short-cut: rfc 
  both dues to ES7 library) */

  /* diff based on function based component */

  /*a news website is being deployed where you can see news*/

  //render method is a life cycle method:
  //when react loads it runs a ceratin number of files
  //the job of render is to simply show HTML files on screen
  //compiles JSX in HTML

  //NewsAPI(free for developers) will work onlt on localhost
  //It will not work if we deploy

  //now we will set up a react router
  //so after clicking the certain category of news from navbar
  //we get related articles of that particular category