var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyles')

/*

http://api.openweathermap.org/data/2.5/weather
?q=London,uk&appid=0bbf7572880155f0d500eca39a583571&units=imperial

*/

ReactDOM.render(
 <Router history={hashHistory}>
 	<Route path="/" component={Main}>
 		<Route path="about" component={About} />
 		<Route path="examples" component={Examples} />
 		<IndexRoute component={Weather}/> 
 	</Route>
 </Router>,
  document.getElementById('app')
);
