var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
	
	getInitialState: function () {
		return {
			isLoading: false
		}	
	},
	
	handleSearch: function (location) {
		var that = this;
		
		this.setState({isLoading:true});
		
		OpenWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading:false
			});
		}, function(error) {
			that.setState({isLoading:false});
			alert(error);
		});
		
		
	},
	
	render: function() {
		
		var {isLoading, location, temp} = this.state;
		
		function renderMessage() {
			if(isLoading) {
				
				return <h3 className='text-center'>Fetching weather...</h3>
				
			} else if (location !== undefined && temp !== undefined) {
				
				return <WeatherMessage location={location} temp={temp}/>
				
			}
		}
		
		return (
			<div>
				<h1 className='text-center'>Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
})

module.exports = Weather;