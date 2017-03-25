var React = require('react');
var Nav = require('Nav');

/*var Main = React.createClass ({
	
	render: function () {
		return (
			<div>
				<Nav/>
				<h2>Main Component</h2>	
				{this.props.children} 
			</div>
		);
	}
	
});*/

var Main = (props) => {
	
	return (
			<div>
				<Nav/>
				<h2>Main Component</h2>	
				{props.children} 
			</div>	
	)
}

//{this.props.children} Describes where children components should be placed

module.exports = Main;