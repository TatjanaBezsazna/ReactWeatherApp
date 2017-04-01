var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var Weather = React.createClass({
	
	getInitialState: function () {
		return {
			isLoading: false
		}	
	},
	
	componentDidMount: function() {
		
		var location = this.props.location.query.location;
		
		if(location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	
	handleSearch: function (location) {
		var that = this;
		
		this.setState({
			isLoading:true,
			errorMessage: null, 
			location: null,
			temp: null
		});
		
		OpenWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location.capitalizeFirstLetter(),
				temp: temp,
				isLoading:false,
			});
		}, function(error) {
			that.setState({
				isLoading:false,
				errorMessage: error.message
			});
		});
		
		
	},
	
	componentWillReceiveProps: function(newProps) {
		var location = newProps.location.query.location;
		
		if(location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	
	render: function() {
		
		var {isLoading, location, temp, errorMessage} = this.state;
		
		function renderMessage() {
			if(isLoading) {
				
				return <h3 className='text-center'>Fetching weather...</h3>
				
			} else if (location && temp !== undefined) {
				
				return <WeatherMessage location={location} temp={temp}/>
				
			}
		}
		
		function renderError() {
			if(errorMessage) {
				return (
				  <ErrorModal message={errorMessage}/>
				)
			} 
		}
		
		return (
			<div>
				<h1 className='text-center page-title'>Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
})

module.exports = Weather;