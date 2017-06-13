var React = require('react');
var ReactDOM = require('react-dom');
var Token = require('arpggio-token-component');

var App = React.createClass({
	render () {
		return (
			<div>
				<Token />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
