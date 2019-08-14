import React, { Component } from 'react';
import ProjectArea from '../ProjectArea/ProjectArea';
import {Header} from '../Header/Header';
import {AboutMe} from '../AboutMe/AboutMe';


class App extends Component{
  
  render() {
    return (
      <div className="App">
        <Header/>
        <AboutMe/>
        <ProjectArea/>
      </div>
    );
  }
}

export default App;
