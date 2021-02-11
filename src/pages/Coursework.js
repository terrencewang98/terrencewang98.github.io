import React, { Component } from 'react';

const completed = [
	'cs211 - data structures',
	'cs223 - probability and computing',
	'cs231 - programming language paradigms',
	'cs241 - artificial intelligence',
	'cs254 - data mining',
	'cs283 - networks',
	'cs311 - algorithms',
]

const future = [
	'cs171 - systems',
	'cs273 - parallel and distributed computing',
	'cs247 - machine learning',
	'cs257 - databases',
	'cs321 - graphics',
]

const cardStyle = {padding: "20px 20px 30px 20px"}
const liStyle = {paddingLeft: "30px", marginTop: "10px"}

class Coursework extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>coursework</h1>
				<div className = "card" style = {cardStyle}>
					<h2 style = {{marginBottom: "15px"}}>completed</h2>
					<ul style = {{listStyleType: "none"}}>
						{completed.map(item => 
							<li style = {liStyle}>
								{item}
							</li>
						)}
					</ul>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2 style = {{marginBottom: "15px"}}>future</h2>
					<ul style = {{listStyleType: "none"}}>
						{future.map(item => 
							<li style = {liStyle}>
								{item}
							</li>
						)}
				</ul>
				</div>
				
				
			</div>
		)
	}
}

export default Coursework