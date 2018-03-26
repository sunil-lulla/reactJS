import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			data:"Some text"
		} 
		 this.textChange = this.textChange.bind(this);
	}
	textChange(e){
		this.setState({
			data : e.target.value
		})
	}
	render(){
		return(
				<div>
					<input type="text" onChange={this.textChange} value={this.state.data} />
					<h1> { this.state.data } </h1>
				</div>
			)
	}

}
	
export default App;



