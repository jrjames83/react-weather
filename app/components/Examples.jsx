var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    displayName: 'Examples',
    render() {
        return (
        	<div>
	            <h1 className="text-center page-title">Examples</h1>
	            <p>Here are a few examples to try out:</p>
	            <ol>
	              <li>
	              	<Link to='/?location=Denver'>Denver</Link>
	              </li>
	              <li>
	              	<Link to='/?location=Rio'>Rio, Brazil</Link>
	              </li>
	            </ol>
            </div>
        );
    }
});

module.exports = Examples;