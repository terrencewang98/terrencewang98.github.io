import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Coursework from './pages/Coursework';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Extracurricular from './pages/Extracurricular';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route basename = "/terrencewang98" exact path="/" component={Home} />
        <Route basename = "/terrencewang98" exact path="/about" component = {About} />
        <Route basename = "/terrencewang98" exact path="/education" component = {Education} />
        <Route basename = "/terrencewang98" exact path="/coursework" component = {Coursework} />
        <Route basename = "/terrencewang98" exact path="/skills" component = {Skills} />
        <Route basename = "/terrencewang98" exact path="/experience" component = {Experience} />
        <Route basename = "/terrencewang98" exact path="/projects" component = {Projects} />
        <Route basename = "/terrencewang98" exact path="/extracurricular" component = {Extracurricular} />
        <Route basename = "/terrencewang98" exact path="/contact" component = {Contact} />
      </div>
    </Router>
  )
}

export default App;
