var React = require('react');

var ModalComponent = React.createClass({
	getInitialState: function(){
		return {nameVal: '', isTruck: false, menuVal: ''}
	},
	updateName: function(event){
		var state = this.state;
		state.nameVal = event.target.value
		this.setState(state)
	},	
	check: function(event){
		var state = this.state;
		state.isTruck = !state.isTruck;
		this.setState(state)

	},
	updateMenu: function(event){
		var state = this.state;
		state.menuVal = event.target.value
		this.setState(state)
	},
	handleClick: function(event){
		event.preventDefault();
		console.log(this.props, "props")
		this.props.onClickUpdate(this.state.nameVal, this.state.isTruck, this.state.menuVal)
		//input reset
		var state = this.state
		state.nameVal = '';
		state.isTruck = false;
		state.menuVal = '';

		this.setState(state)
	},
	render: function(){
		console.log(this.state, ' this is this state')
		return (

				<form>
					<input type="text" placeholder="Name" value={this.state.nameVal} onChange={this.updateName}/>
					<label htmlFor="truck">Is it a Food Truck?</label><input id="truck" type="checkbox" onChange={this.check} checked={this.state.isTruck} name="truck"/>
					<input type="text" placeholder="Menu Link" value={this.state.menuVal} onChange={this.updateMenu}/>
					<button onClick={this.handleClick}>Fix</button>
				</form>

		)
	}
})

module.exports = ModalComponent;


