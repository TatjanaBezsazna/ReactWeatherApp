var React = require('react');

/*var WeatherMessage = React.createClass({
	
	render: function() {
		
		var location = this.props.location;
		var temp = this.props.temp;
		var message = "It is " + temp + " in " + location;
		
		return (
			<p ref='message'>{message}</p>
		)
	}
})*/

var WeatherMessage = (/*props*/{location, temp}) => {
	
	//var {location, temp} = props;
	
	var message = "It is " + temp + " \u2103 in " + location;
	
	return (
		
		<h3 className='text-center'>{message}</h3>
		
	)
	
	
}

module.exports = WeatherMessage;