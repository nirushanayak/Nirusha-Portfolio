import './App.css';
import React, { Component } from 'react';
import About from './components/about';
import Contact from './components/Contact';
import Sidebar from './components/sidebar';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Home from './components/Home';

class App extends Component{
  render(){
    return(
      <div id="colorlib-page">
        <div class="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
