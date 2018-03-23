var styles = {color:'red'}
var MyComponent = React.createClass({
	render:function(){
		return (
			<div style={styles}>
				<h1> Multiple </h1>
				<h1> Components </h1>
				<h1> Demo </h1>
				<h1> with </h1>
				<h1> style </h1>
				<h1> attribute </h1>
			</div>
		)
	}
});


ReactDOM.render(
	<MyComponent/>,document.getElementById('component')
)