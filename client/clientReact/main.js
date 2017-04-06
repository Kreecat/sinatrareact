console.log("hey im working")
//getting my requires on
var React = require('react');
var	ReactDOM = require('react-dom');
var	request = require('superagent');
var	FormComponent = require('./Form');
var ModalComponent = require('./ModalForm');


var MainComponent = React.createClass({
	getInitialState: function(){
		return {data: [], modalFix: false, idToUpdate: '', modalComment: false }
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
		console.log('click')
		var state = this.state;
		state.modalFix = true;
		state.idToUpdate = id;
		console.log(state.idToUpdate + " this is the id")
		this.setState(state)
	},
	comment: function(id){
		console.log('clickl')
		var state = this.state;
		state.modalComment = true;
		state.idToUpdate = id;
		this.setState(state)
	},
	deleteRestaurant: function(id){
		var state = this.state;
		var self = this;


		request.delete('/restaurants/' + id)
			.end(function(err, data){
				console.log("success")
				console.log(data + " this is the delete")
				state.data = data.body;
				self.setState(state);
			});
	},
	updateRestaurantVal: function(name, bool, menu){
		var state = this.state;
		var self = this;
		var objToSend = {
			id: this.state.idToUpdate,
			name: name,
			truck: bool,
			menu: menu
		}
		console.log("im here")
		request.patch('/restaurants/' + this.state.idToUpdate)
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
					console.log("success")
				})
	},
	render: function(){
		var self = this;
		console.log(this.state.data, ' data')
		console.log(this.updateRestaurantVal)

		var data = this.state.data.map(function(restaurant, i){
			console.log(restaurant.truck, ' this is res menu')
					return(
						<div key={i}>
							{restaurant.name}<br/>
							{restaurant.truck === null ? null : restaurant.truck.toString()}<br/>
							{restaurant.menu}<br/>
							<button id="update" onClick={self.update.bind(self, restaurant.id)}>Update!</button>
							<button id="delete" onClick={self.deleteRestaurant.bind(self, restaurant.id)}>deletestuff</button>
							<button id="comment">comments</button>
							{self.state.modalFix ? <ModalComponent onClickUpdate={self.updateRestaurantVal}/> : null}
						</div>
					)
				})
		return (
			<div>
				{data}
				<FormComponent onClickSubmit={this.createRestaurant}/>
			</div>
		)
	}
});





console.log("this is a change")

















ReactDOM.render(
	<MainComponent/>, document.getElementById('container')
)
