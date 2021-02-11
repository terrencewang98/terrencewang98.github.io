import React, { Component } from 'react';

const cardStyle = {padding: "30px 20px 35px 20px"}

class Education extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>education</h1>
				<div className = "card" style = {cardStyle}>
					<h2 style = {{marginBottom: "15px"}}>amherst college, 2017 - present</h2>
					<p><em>bachelor of arts, computer science and economics</em></p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2 style = {{marginBottom: "15px"}}>groton school, 2014 - 2017</h2>
					<p><em>graduated cum laude</em></p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>interlake high school, 2013 - 2014</h2>
				</div>
			</div>
		)
	}
}
export default Education