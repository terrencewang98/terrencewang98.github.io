import React, { Component } from 'react';

const courses = [
	'cs211 - data structures',
	'cs223 - probability and computing',
	'cs231 - programming language paradigms',
	'cs241 - artificial intelligence',
	'cs254 - data mining',
	'cs273 - parallel and distributed computing',
	'cs283 - networks',
	'cs311 - algorithms',]

const cardStyle = {padding: "20px 20px 30px 20px"}
const liStyle = {paddingLeft: "30px", marginTop: "10px"}

class Coursework extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>coursework</h1>
				<ul style = {{listStyleType: "none"}}>
					{courses.map(course => 
						<li className = "card" style = {{padding: "10px 0px 10px 20px", margin: "10px 0px 10px 0px"}}>
							{course}
						</li>
					)}
				</ul>				
			</div>
		)
	}
}

export default Coursework