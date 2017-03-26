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
			<h3>About</h3>
			<p>Welcome to About page</p>
		</div>
		
		
	)
}

module.exports = About;