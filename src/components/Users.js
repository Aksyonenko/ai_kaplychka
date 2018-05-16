import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class Users extends Component {
	state = {
		numOfUsers: 0,
		users: []
	}

	handleChange = (event, index, value) => this.setState({numOfUsers: value});

	handleUserNameChange = (value, i) => {
		const updatedusers = [...this.state.users];
		updatedusers[i] = value;
		this.setState({users: updatedusers})
	}

	render() {
		let userFields = [];
		for (let i = 0; i < this.state.numOfUsers; i++) {
			userFields.push(
			<div  key={i}>
				<TextField hintText={`Ім\'я учасника № ${i + 1}`}
					onChange={(event) => this.handleUserNameChange(event.target.value, i)}/>
			</div>);
		}
		return (<div>
			<SelectField onChange={this.handleChange}
					floatingLabelText="Оберіть кількість учасників" >
					<MenuItem value={2} primaryText="2" />
					<MenuItem value={3} primaryText="3" />
					<MenuItem value={4} primaryText="4" />
			</SelectField>
			{userFields}
		</div>);
	}

}

export default Users;
