import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Education from './components/education'
import Projects from './components/projects'
import Organizations from './components/organizations'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
                    <Introduction></Introduction>
                    <About></About>
					<Education></Education>
                    <Projects></Projects>
                    <Organizations></Organizations>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
