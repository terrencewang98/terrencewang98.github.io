import React, { Component } from 'react';
import profilepic from '.././resources/profilepic.jpg';

class Home extends Component {
	render() {
		return (
			<div className="condiv home">
				<img src={profilepic} className="profilepic"></img>
				<h1> terrence wang </h1>
				<p> computer science & economics major </p>
				<p> amherst college '21 </p>
			</div>
		)
	}
}
export default Home