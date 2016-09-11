var React = require('react');

var About = (props) => {
	return (
	 <div>
	 <h1 className="text-center page-title">About This Site</h1>
		<table>
		  <thead>
		    <tr>
		      <th width="500">Technology</th>
		      <th width="500">By</th>
		      <th width="500">Description</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>ReactJS</td>
		      <td><a href="https://github.com/reactjs">Facebook</a></td>
		      <td>Library for user interfaces and mainly SPAs</td>
		    </tr>
		    <tr>
		      <td>OpenWeatherMap</td>
		      <td><a href="http://openweathermap.org/api">Open Weather Map</a></td>
		      <td>Free JSON API to get Weather data</td>
		    </tr>

		  </tbody>
	</table>
  </div>
		)
};


module.exports = About;