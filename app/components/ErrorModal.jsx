var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
	getDefaultProps() {
	    return {
	        title: "Error"  
	    };
	},
	propTypes: {
	    title: React.PropTypes.string,
	    message: React.PropTypes.string
	},
	// cDM occurrs in Weather.jsx conditionally based on a var in state
	componentDidMount() {
		var {title, message} = this.props;

        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            	<h4>{title}</h4>
            	<p>{message}</p>
            	<p>
            	 <button className="button hollow" data-close="">
            	  Okay
            	 </button>
            	</p>
            </div>
        );

        // Circumventing jquery control of the DOM
        var $modal = $(ReactDOMServer.renderToString(modalMarkup))
        $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));

	    //var modal = new Foundation.Reveal($('#error-modal'));
	    modal.open();  
	},

    render() {

    	return (
    		<div> 
    		</div>
    		)

    }
});

module.exports = ErrorModal;	