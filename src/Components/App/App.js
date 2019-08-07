import React, { Component } from 'react';
import ProjectArea from '../ProjectArea/ProjectArea';
import { Header } from '../Header/Header';


class App extends Component{
  
  render() {
    return (
      <div className="App">
        <Header/>
        <ProjectArea/>
      </div>
    );
  }
}

export default App;
