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
				kjkjd
				<Content myDataProp = {this.state.data} myDataEvent = {this.textChange}>
				</Content>
				</div>
			)
	}

}

class Content extends React.Component {
	render(){
		return (
			<div>
				<input type="text" onChange={this.props.myDataEvent} value={this.props.myDataProp} />
				<h1> { this.props.myDataProp } </h1>
			</div>
		)
	}
}


export default App;



