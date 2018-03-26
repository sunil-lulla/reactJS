var MyComponent = React.createClass({
	render:function(){
		return (
			<div>
				<h2> Embedding Javascript Demo </h2>
				<h3> Sum is: {9+9}</h3>
			</div>
			
		)
	}
});


ReactDOM.render(
	<MyComponent/>,document.getElementById('component')
)