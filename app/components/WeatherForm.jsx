var React = require('react');

//e.preventDefault() prevents page from reloading

var WeatherForm = React.createClass({
	
	onFormSubmit: function(e) {
		e.preventDefault();
		
		var location = this.refs.location.value;
		
		if(location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
		
	},
	
	render: function() {
		return (
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="search" ref="location" placeholder='Search weather by city'/>
					</div>
					<div>
						<input type="submit" value="Get Weather" className='hollow button expanded'/>
					</div>
				</form>
		)
	}
})

module.exports = WeatherForm;