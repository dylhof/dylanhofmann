import React, {Component} from 'react';
import {Project} from '../Project/Project';
import {Projects} from '../../assets/projects';

class ProjectArea extends Component{
  displayProjects () {
    const projectsToShow = Projects.map(project => {
      return <Project {...project}></Project>
    })
    return projectsToShow
  }

  render() {
    return (
      <div className='projectArea-div'>
        {this.displayProjects()}
      </div>
    )
  }
}

export default ProjectArea;