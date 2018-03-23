var MyComponent = React.createClass({
	render:function(){
		return (
			<h2> Hello Test</h2>
		)
	}
});


ReactDOM.render(
	<MyComponent/>,document.getElementById('component')
)