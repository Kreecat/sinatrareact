var React = require('react');

var FormComponent = React.createClass({
	getInitialState: function(){
		return {}
	},
	render: function(){
		return (
			<div>
				<form>
					<input type="text" placeholder="Name" value={this.state.nameVal} onChange={this.updateName}/>
					<label for="truck">Is it a Food Truck?</label><input id="truck" type="checkbox" name="truck"/>
					<input type="text" placeholder="Menu Link" value={this.state.menuVal} onChange={this.updateMenu}/>



		)
	}
})