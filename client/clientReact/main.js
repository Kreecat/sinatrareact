console.log("hey im working")
//getting my requires on
var React = require('react');
var	ReactDOM = require('react-dom');
var	request = require('superagent');
var	FormComponent = require('./Form');

var MainComponent = React.createClass({
	getInitialState: function(){
		return {data: [], modalFix: false, idToUpdate: '' }
	},
	componentDidMount: function(){
		var state = this.state;
		var self = this;
		request.get('')
			.end(function(err, data){
				state.data = data.body;
				self.setState(state);
			})
	},
	createRestaurant: function(name, boolean, menu){
		var state = this.state;
		var self = this;
		request.post('')
			.type('form')
			.send({name: name, truck: boolean, menu: menu})
			.end(function(err, data){
				console.log(data);
				state.data = data.body;
				self.setState(state);
			})
	},
	update: function(id){
		var state = this.state;
		state.modalFix = true;
		state.idToUpdate = id;
		this.setState(state)
	},
	updateResturantVal: function(name, boolean, menu){
		var state = this.state;
		var self = this;
		var objToSend = {
			id: this.state.idToUpdate,
			name: name,
			truck: boolean,
			menu: menu
		}
		request.patch('' + this.state.idToUpdate)
			.type('form')
			.send({
				id: this.state.idToUpdate,
				name: name,
				truck: boolean,
				menu: menu
			})
				.end(function(err, data){
					console.log(data);
					state.data = data.body;
					self.setState(state)
				})
	},
	render: function(){
		var self = this;
		return (
			<div>
				{this.state.data.map(function(item,I){
					return(
						<div>
						</div>
						)
				})}


				<FormComponent onClickSubmit={this.createRestaurant}/>
			</div>
			)
	}
})





console.log("this is a change")

















ReactDOM.render(
	<MainComponent/>, document.getElementById('container')
)
