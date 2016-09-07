var React = require('react');

// var WeatherMessage = React.createClass({
//     displayName: 'WeatherMessage',
//     render() {
//         return (
//             <div>
//             	<h3>Heres your message</h3>
//             	<ol>
//             	  <li>{this.props.location}</li>
//             	  <li>{this.props.temp}</li>
//             	</ol>
//             </div>
//         );
//     }
// });


// Note the sophisticated destructuring below
// props has a temp and location rather than doing
// var {temp, location} = props, just do it in the arrow function
var WeatherMessage = ({temp, location}) => {

	//var {temp, location} = props;

    return (
        <div>
        	<h3>Heres your message</h3>
        	<ol>
        	  <li>{location}</li>
        	  <li>{temp}</li>
        	</ol>
        </div>
    );	
}


module.exports = WeatherMessage;