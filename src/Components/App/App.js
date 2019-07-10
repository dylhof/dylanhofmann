import React, {Component} from 'react';
import './App.css';
import {Project} from '../Project/Project';
import {Projects} from '../../assets/projects';

class App extends Component{
  displayProjects () {
    const projectsToShow = Projects.map(project => {
      return <Project {...project}></Project>
    })
    return projectsToShow
  }

  render() {
    return (
      <div className="App">
        <h1>Dylan Hofmann </h1>
        {this.displayProjects()}
      </div>
    );
  }
}

export default App;
