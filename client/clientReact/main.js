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
		request.get('/home/json')
			.end(function(err, data){
				console.log(data)
				state.data = data.body;
				self.setState(state);
			})
	},
	createRestaurant: function(name, bool, menu){
		var state = this.state;
		var self = this;

		console.log(name, bool, menu, ' this is before the ajax')
		request.post('/restaurants')
			.type('form')
			.send({name: name, truck: bool, menu: menu})
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
	updateResturantVal: function(name, bool, menu){
		var state = this.state;
		var self = this;
		var objToSend = {
			id: this.state.idToUpdate,
			name: name,
			truck: bool,
			menu: menu
		}
		request.patch('http://localhost:9393/restaurants/' + this.state.idToUpdate)
			.type('form')
			.send({
				id: this.state.idToUpdate,
				name: name,
				truck: bool,
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
		console.log(this.state.data, ' data')

		var data = this.state.data.map(function(restaurant, i){
			console.log(restaurant.truck, ' this is res menu')
					return(
						<div key={i}>
							{restaurant.name}<br/>
							{restaurant.truck === null ? null : restaurant.truck.toString()}<br/>
							{restaurant.menu}<br/>
							<button id="update" onClick={self.update.bind(self, restaurant.id)}>Update!</button>
						</div>
						)
				})
		{this.state.modal ? <ModalUpdate updateResturantVal={this.updateResturantVal}/> : null}
		return (
			<div>
				{data}
				<FormComponent onClickSubmit={this.createRestaurant}/>
			</div>
			)
	}
});

var ModalUpdate = React.createClass({
	getInitialState: function() {
		return {updateVal: ''}
	},
	updateVal: function(event){
		var state = this.state;
		state.updateVal = event.target.value;
		this.setState()
	},
	finalVal: function(){
		this.props.updateResturantVal(this.state.updateVal)
	},
	render: function(){
		return(
			<div>
				<input type="text" onChange={this.updateVal} value={this.state.updateVal}/>
				<button onClick={this.finalVal}>Submit Change!</button>
			</div>
			)
	}
})





console.log("this is a change")

















ReactDOM.render(
	<MainComponent/>, document.getElementById('container')
)
