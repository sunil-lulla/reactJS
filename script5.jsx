var headerStyles = {color:'red'};
var footerStyles = {color:'blue'};

var Header = React.createClass({
	render:function(){
		return (
			<div>
				<h1 style={headerStyles}>
					This is my header.
				</h1>
			</div>
		)
	}
});

var Footer = React.createClass({
	render:function(){
		return(
			<h1 style={footerStyles} >
				This is my footer.
			</h1>
		)
	}
});

var MyComponent = React.createClass({
	render:function(){
		return (
			<div>
				<Header  />
				<h1> The Sum is {2+2} </h1>
				<Footer />
			</div>
		);
	}
});


ReactDOM.render(
	<MyComponent/>,document.getElementById('component')
)