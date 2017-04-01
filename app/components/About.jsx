var React = require('react');

/*var About = React.createClass({
	render: function() {
		return (
		
			<h3>About Component</h3>
		
		)
	}
})*/

//Arrow function for react components can only be used for stateles presentational component. But if it can be used - it is mostly preferable

var About = (props) => {
	
	return (
		<div>
			<h1 className='text-center page-title'>About</h1>
			<p>This is a weather application built on React for <strong>The Complete React Web App Developer Course</strong>.</p>
			<p>Here are some of the tools I used:</p>
			<ol>
				<li>
					<a href='https://facebook.github.io/react'>React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href='https://openweathermap.org/'>Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
				</li>
				<li>
					<a href='https://www.udemy.com/the-complete-react-web-app-developer-course/'>The Complete React Web App Developer Course</a> - Udemy course I have taken to get familiar with React, as well as to build this application.
				</li>
			</ol>
		</div>
		
		
	)
}

module.exports = About;