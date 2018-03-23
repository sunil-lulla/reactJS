var MyComponent = React.createClass({
	render:function(){
		return (
			<div>
				<h1> Multiple </h1>
				<h1> Components </h1>
				<h1> Demo </h1>
			</div>
		)
	}
});


ReactDOM.render(
	<MyComponent/>,document.getElementById('component')
)