import React, { Component } from 'react';
import githubLink from '.././resources/githubLink.png'
import linkedinLink from '.././resources/linkedinLink.png'

class Contact extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>contact</h1>
				<h2 style = {{marginBottom: "30px"}}>terrence.wang.98@gmail.com</h2>
				<div className = "buttonRow">
					<a href="https://github.com/terrencewang98" target="_blank" rel="noreferrer">
						<img className = "imgButton" src = {githubLink} style = {{width: "60px", marginRight: "30px"}}/>
					</a>
					<a href="https://www.linkedin.com/in/terrence-wang-40a20a137/" target="_blank" rel="noreferrer">
						<img className = "imgButton" src = {linkedinLink} style = {{width: "60px"}}/>
					</a>
				</div>								
			</div>
		)
	}
}
export default Contact