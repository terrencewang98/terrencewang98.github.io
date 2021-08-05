import React, { Component } from 'react';

const pStyle = {marginBottom: "25px"};

class About extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>about</h1>
				<div className = "card" style = {{padding: "30px 20px 20px 20px"}}>
					<p style = {pStyle}>
						Hey, I’m Terrence! 
					</p>
					<p style = {pStyle}>
						I’m a senior majoring in Computer Science and Economics at Amherst College, expecting to graduate in December 2021. 
						As someone who loves all kinds of games — whether it’s card games, board games, or video games — I’ve always enjoyed thinking creatively and analytically to solve puzzles. 
						That’s what I love about coding: it offers the opportunity to tackle challenging problems by inventing clever solutions.
					</p>
					<p style = {pStyle}>
						I have over five years of programming experience with a wide variety of languages, mainly with Java and Python. 
						I’m currently pursuing an entry-level position in software engineering, where I hope to further improve my coding ability within a professional environment while also collaborating on fun and engaging projects.
					</p>
					<p style = {pStyle}>
						Outside of school, I play a starting position on the Amherst Men’s Varsity Squash Team. I also occasionally work as a private tutor, introducing the younger generation to programming. 
						In my free time, I like coding personal projects, longboarding, playing poker, and gaming. 
					</p>
				</div>
			</div>
		)
	}
}
export default About