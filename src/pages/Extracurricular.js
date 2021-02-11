import React, { Component } from 'react';

const cardStyle = {padding: "15px 20px 20px 20px"}

class Extracurricular extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>extracurricular</h1>
				<div className = "card" style = {cardStyle}>
					<h2>amherst college men's varsity squash, fall 2017 - present</h2>
					<p style = {{margin: "15px 0px 10px 0px"}}><em>team member</em></p>
					<p>played #1 position freshman and sophomore year</p>
					<p> awarded mvp 2018; all-nescac 2018, 2019; nescac all-sportsmanship 2018 </p>
					<p> featured in nescac friday feature 2018-2019 </p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>seattle urban squash, summer 2017</h2>
					<p style = {{margin: "15px 0px 10px 0px"}}><em>academic tutor & squash coach</em></p>
					<p>tutored underprivileged students in reading, writing, history, math</p>
					<p>assisted squash practices by providing coaching and running drills</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>dandelion school, summer 2016</h2>
					<p style = {{margin: "15px 0px 10px 0px"}}><em>english teacher</em></p>
					<p>completed 110 hours of volunteer service teaching english in an underprivileged area of beijing</p>
				</div>
			</div>
		)
	}
}
export default Extracurricular