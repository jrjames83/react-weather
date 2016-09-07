var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


/*

WeatherForm will get data
...send to Parent (this component) which will manage state
...then pass to WeatherMessage as a prop

*/

var Weather = React.createClass({
	getInitialState() {
	    return {
	        isLoading: false
	    };
	},
	handleSearch(location) {
		var that = this; // bind to handleSearch not the imported func
		this.setState({isLoading: true});
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMssg) {
			that.setState({isLoading: false});
			alert(errorMssg);
		});


	},
    render() {
    	var {isLoading, temp, location} = this.state;

    	function renderMessage() {
    		if (isLoading) {
    			return <h3>Fetching weather....</h3>;
    		} else if (temp && location) {
    			return <WeatherMessage location={location} temp={temp}/>
    		}
    	}

        return (
            <div>

            Weather Component
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}

            </div>
        );
    }
});

module.exports = Weather;