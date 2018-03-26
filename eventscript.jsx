var Bulb = React.createClass({
		getInitialState:function(){
				return {
					status:false
				}
			},

		switch:function(){
			this.setState({
				status:!this.state.status
				})
			},

		render:function () {
			var DispBulb = this.state.status?'https://images.homedepot-static.com/productImages/642421a5-efff-46fd-a99f-c758fa3e5124/svn/cfl-bulbs-fnl-a19-75-w27-120-nd-b-64_300.jpg':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJKroSMNj3Fn-yrrIjmuUGYF94U11UZaOTn04c-jkKdM2h9_K';
			return (
					<div>
						<img src={DispBulb} />
						<button onClick={this.switch}>Click Me</button>
					</div>
				)
		}
	})
ReactDOM.render(
	<Bulb/>,document.getElementById('component')
)