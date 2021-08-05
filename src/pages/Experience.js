import React, { Component } from 'react';

const cardStyle = {padding: "15px 0px 20px 20px", margin: "10px 0px 10px 0px"}

class Experience extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>experience</h1>
				<div className = "card" style = {cardStyle}>
					<h2>trustmark benefits, summer 2021</h2>
					<p><em>summer intern</em></p>
					<p>
						learned and utilized angular to implement frontend enhancements to the customer portal website
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>amherst college cs department, summer 2020</h2>
					<p><em>summer intern</em></p>
					<p>
						designed and implemented an algorithm visualization tool using java to be used for the algorithms course
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>amherst college cs department, fall 2018 & spring 2020</h2>
					<p><em>teaching assistant and peer tutor</em></p>
					<p>
						hosted help sessions to assist cs students with projects and labs; provided individual support via 1-on-1 tutoring
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>hepco capital management, summer 2019</h2>
					<p><em>summer intern</em></p>
					<p>
						conducted an in-depth study of the esports industry to identify potential areas of growth for investment
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>unidel (food delivery start-up), summer 2018</h2>
					<p><em>summer intern</em></p>
					<p>
						performed data analysis using python and stata to predict consumer habits and optimize time to delivery
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>amherst college economics department, summer 2018 & fall 2018</h2>
					<p><em>research assistant</em></p>
					<p>
						created datasets of 18th century british lead mines using stata to analyze the health effects of lead mining 
					</p>
				</div>
				<div className = "card" style = {cardStyle}>
					<h2>northland communications, summer 2017</h2>
					<p><em>summer intern</em></p>
					<p>
						utilized microsoft excel and power bi to discover trends in customer usage and provide forecasts
					</p>
				</div>
			</div>
		)
	}
}
export default Experience