var React = require('react');

var FormComponent = React.createClass({
	getInitialState: function(){
		return {nameVal: '', menuVal: '', isTruck: false}
	},
	updateName: function(event){
		var state = this.state;
		state.nameVal = event.target.value
		this.setState(state)
	},
	updateMenu: function(event){
		var state = this.state;
		state.menuVal = event.target.value
		this.setState(state)
	},
	check: function(event){
		var state = this.state;
		state.isTruck = !state.isTruck;
		this.setState(state)

	},
	handleClick: function(event){
		event.preventDefault();
		this.props.onClickSubmit(this.state.nameVal, this.state.isTruck, this.state.menuVal)
		//input reset
		var state = this.state
		state.nameVal = '';
		state.menuVal = '';
		state.isTruck = false;
		this.setState(state)
	},
	render: function(){
		console.log(this.state, ' this is this state')
		return (

				<form>
					<input type="text" placeholder="Name" value={this.state.nameVal} onChange={this.updateName}/>
					<br/>
					<label htmlFor="truck">Is it a Food Truck?</label><input id="truck" type="checkbox" onChange={this.check} checked={this.state.isTruck} name="truck"/>
					<br/>
					<input type="text" placeholder="Menu Link" value={this.state.menuVal} onChange={this.updateMenu}/>
					<br/>
					<button onClick={this.handleClick}>Add Restaurant</button>
				</form>

		)
	}
})

module.exports = FormComponent;
