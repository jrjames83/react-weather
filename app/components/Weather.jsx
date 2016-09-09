var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');


/*

WeatherForm will get data
...send to Parent (this component) which will manage state
...then pass to WeatherMessage as a prop

*/

var Weather = React.createClass({
	getInitialState() {
	    return {
	        isLoading: false,
	        errorMessage: undefined,
	       

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
		}, function(e) {
			that.setState({
				isLoading: false,
				location: 'Did not find one',
				errorMessage: e.message // from the promise written in openweathermap.jsx
				});
		});


	},
    render() {
    	var that = this;
    	var {isLoading, temp, location, errorMessage} = this.state;

    	function renderMessage() {
    		if (isLoading) {
    			return <h3 className="text-center">Fetching weather....</h3>;
    		} else if (temp && location) {
    			return <WeatherMessage location={location} temp={temp}/>
    		}
    	}

    	function renderError() {
    		if (typeof errorMessage === 'string') {

    			return (
    				<ErrorModal	message={errorMessage} />
    				)
    		}
    	}

        return (
            <div>

            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}

            </div>
        );
    }
});

module.exports = Weather;