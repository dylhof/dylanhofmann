import React, { Component } from 'react';
import ProjectArea from '../ProjectArea/ProjectArea';
import {Header} from '../Header/Header';
import {AboutMe} from '../AboutMe/AboutMe';
import {ContactMe} from '../ContactMe/ContactMe';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component{
  
  render() {
    return (
      <Router>
        <div className='App'>
          <Header/>
          <Route path='/' exact render={() => (
            <div>
              <AboutMe/>
              <ProjectArea/>
            </div>)}
          />
          <Route path='/contactme' component={ContactMe} />
        </div>
      </Router>
    );
  }
}

export default App;
