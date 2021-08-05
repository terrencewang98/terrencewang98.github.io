import React, { Component } from 'react';
import externalLink from '.././resources/externalLink.png'
import githubLink from '.././resources/githubLink.png'
import algorithmVisual from '.././resources/AlgorithmVisual.jar'
import sudokuSolver from '.././resources/SudokuSolver.jar'

const cardStyle = {padding: "20px 20px 15px 20px"}

class Projects extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>projects</h1>
				<div className = "card" style = {cardStyle}>
					<h2>crypto tracker</h2>
					<p style = {{marginTop: "15px"}}>an angular app that displays recent crypto data</p>
					<div className = "buttonRow">
						<a href="https://terrencewang98.github.io/crypto-tracker" target="_blank" rel="noreferrer">
							<img className = "imgButton" src = {externalLink} style = {{width: "70px"}}/>
						</a>
						<a href="https://github.com/terrencewang98/crypto-tracker" target="_blank" rel="noreferrer"> 
							<img className = "imgButton" src = {githubLink} style = {{width: "50px"}}/>
						</a>
					</div>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>sudoku solver</h2>
					<p style = {{marginTop: "15px"}}>an efficient sudoku solver built in java with multithreading capabilities</p>
					<div className = "buttonRow">
						<a href={sudokuSolver} download = "SudokuSolver.jar">
							<img className = "imgButton" src = {externalLink} style = {{width: "70px"}}/>
						</a>
						<a href="https://github.com/terrencewang98/sudoku-solver" target="_blank" rel="noreferrer"> 
							<img className = "imgButton" src = {githubLink} style = {{width: "50px"}}/>
						</a>
					</div>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>covid tracker</h2>
					<p style = {{marginTop: "15px"}}>a react app that displays the latest global covid statistics</p>
					<div className = "buttonRow">
						<a href="https://terrencewang98.github.io/covid-tracker" target="_blank" rel="noreferrer">
							<img className = "imgButton" src = {externalLink} style = {{width: "70px"}}/>
						</a>
						<a href="https://github.com/terrencewang98/covid-tracker" target="_blank" rel="noreferrer">
							<img className = "imgButton" src = {githubLink} style = {{width: "50px"}}/>
						</a>
					</div>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>spotify music player</h2>
					<p style = {{marginTop: "15px"}}>a simple music player built with react for spotify users to control their listening session</p>
					<div className = "buttonRow">
						<a href="https://terrencewang98.github.io/spotify-player" target="_blank" rel="noreferrer">
							<img className = "imgButton" src = {externalLink} style = {{width: "70px"}}/>
						</a>
						<a href="https://github.com/terrencewang98/spotify-player" target="_blank" rel="noreferrer">
							<img className = "imgButton" src = {githubLink} style = {{width: "50px"}}/>
						</a>
					</div>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>24 - puzzle game</h2>
					<p style = {{marginTop: "15px"}}>a google play app built in android studio recreating the playing card game, 24, in a mobile format</p>
					<div className = "buttonRow">
						<a href="https://play.google.com/store/apps/details?id=edu.mit.vkwang" target="_blank" rel="noreferrer">
							<img className = "imgButton" src = {externalLink} style = {{width: "70px"}}/>
						</a>
						<a href="https://github.com/terrencewang98/24---Puzzle-Game-App" target="_blank" rel="noreferrer">
							<img className = "imgButton" src = {githubLink} style = {{width: "50px"}}/>
						</a>
					</div>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>algorithm visualizer</h2>
					<p style = {{marginTop: "15px"}}>a tool built with java swing that provides step-by-step breakdowns of important algorithms</p>
					<div className = "buttonRow">
						<a href={algorithmVisual} download = "AlgorithmVisualizer.jar">
							<img className = "imgButton" src = {externalLink} style = {{width: "70px"}}/>
						</a>
						<a href="https://github.com/terrencewang98/AlgorithmVisual" target="_blank" rel="noreferrer"> 
							<img className = "imgButton" src = {githubLink} style = {{width: "50px"}}/>
						</a>
					</div>
				</div>
				
			</div>
		)
	}
}
export default Projects