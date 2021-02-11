import React, { Component } from 'react';

const items = [
	'Java',
	'Python',
	'JavaScript',
	'React',
	'HTML',
	'CSS',
	'Android Studio',
	'Git',
	'Hadoop',
	'Haskell',
	'R',
	'Stata'
]

class Skills extends Component {
	render() {
		return (
			<div className="condiv">
				<h1>skills</h1>
				<ul style = {{listStyleType: "none"}}>
					{items.map(item => 
						<li className = "card" style = {{padding: "10px 0px 10px 20px", margin: "10px 0px 10px 0px"}}>
							{item}
						</li>
					)}
				</ul>
			</div>
		)
	}
}

export default Skills