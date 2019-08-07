import React, {Component} from 'react';
import {Project} from '../Project/Project';
import {Projects} from '../../assets/projects';
import uuid from 'uuid';

class ProjectArea extends Component{
  displayProjects () {
    const projectsToShow = Projects.map(project => {
      return <Project key={uuid()} {...project}></Project>
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