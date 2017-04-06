var React = require('react');

var ModalComment = React.createClass({
	getInitialState: function(){
		return{data: [], grabbedID: '', comment: ''}
	},
	componentDidMount: function(id) {
		var state = this.state;
		var self = this;
		state.grabbedID = id;
		request.get('/restaurants/' + id + '/reviews')
			.end(function(err, data){
				console.log(data)
				state.data = data.body;
				self.setState(state)
			})	
	},
	updateComment: function(event){
		var state = this.state;
		state.comment = event.target.value
		this.setState(state)
	},
	addComment: function(event){
		event.preventDefault();
		this.props.postReview(this.state.updateValue)

	},
	render: function(){
		var self = this;
		var data = this.state.data.map(function(restaurant, i){					
			return(
				<div key={i}>
					{restaurant.name}<br/>
					{restaurant.truck}<br/>
					{restaurant.menu}<br/>
					{restaurant.review}<br/>
					<form>
						<input type="text" placeholder="Add a Comment" value={this.state.comment} onChange={this.updateComment}/>
						<button onClick={this.addComment}>Add</button>
					</form>
				</div>
				)
		})
		return (
			<div>
				{data}
			</div>
		)
	}
})


module.exports = ModalComment;