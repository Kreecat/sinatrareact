console.log("hey im working")
//getting my requires on
var React = require('react');
var	ReactDOM = require('react-dom');
var	request = require('superagent');
var	FormComponent = require('./Form');

var MainComponent = React.createClass({
	getInitialState: function() {
		return {}
	},
	render: function(){
		return (
			<h1>Hi</h1>
			)
	}
})





console.log("this is a change")

















ReactDOM.render(
	<MainComponent/>, document.getElementById('container')
)