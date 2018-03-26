import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			data:[
				{
	               "id":1,
	               "name":"Foo",
	               "age":"20"
	            },
	            {
	               "id":2,
	               "name":"Bar",
	               "age":"30"
	            },
	            {
	               "id":3,
	               "name":"Baz",
	               "age":"40"
	            }
			]
		}
	}

	render(){
		return(
				<div>
					<Header />
					<table>
						<tbody>
							{this.state.data.map((person, i) => <TableRow key = {i} 
                     dat = {person} />)
							}
						</tbody>
					</table>
				</div>
			)
	}
}

class Header extends React.Component {
	render(){
		return(
				<div>
					<h1> Header </h1>
				</div>
			)
	}
}

class TableRow extends React.Component {
	render(){
		return (
				<tr>
					<td>{this.props.dat.id}</td>
		            <td>{this.props.dat.name}</td>
		            <td>{this.props.dat.age}</td>
				</tr>
		)
	}
}

export default App;