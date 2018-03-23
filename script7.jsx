var headerStyles = {color:'red'};
var footerStyles = {color:'blue'};

var Header = React.createClass({
	render:function(){
		return (
			<div>
				<h1 style={headerStyles}>
					This is my 
					{this.props.name}.
				</h1>
			</div>
		)
	}
});

var Footer = React.createClass({
	getInitialState:function(){
		return {
			user:'Sunil Lulla'
		}
	},
	render:function(){
		setTimeout(()=>{this.setState({user:'Sam'})},2000);
		return(
			<div>
				<h2> This is my state Demo {this.state.user} </h2>
				<h1 style={footerStyles}>This is my footer.</h1>
			</div>
		)
	}
});

var MyComponent = React.createClass({

	render:function(){
		
		return (
			<div>
				<Header name="Header1"  />
				<Header name="Header2"  />
				<h1> The Sum is {2+2} </h1>
				<Footer />
			</div>
		);
	}
});


ReactDOM.render(
	<MyComponent/>,document.getElementById('component')
)