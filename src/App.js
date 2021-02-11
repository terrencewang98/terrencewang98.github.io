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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/education" component = {Education} />
        <Route exact path="/coursework" component = {Coursework} />
        <Route exact path="/skills" component = {Skills} />
        <Route exact path="/experience" component = {Experience} />
        <Route exact path="/projects" component = {Projects} />
        <Route exact path="/extracurricular" component = {Extracurricular} />
        <Route exact path="/contact" component = {Contact} />
      </div>
    </Router>
  )
}

export default App;
