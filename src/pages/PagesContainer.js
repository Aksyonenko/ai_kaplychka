import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { HelloPage } from './pages';
import dialogs from './../dialogs';
import Users from './../components/Users'

class PagesContainer extends Component {
	state = {
		currentDialog: dialogs.HELLO_PAGE,
		lastPage: false
	}

	onSubmit = () => {
		const { next } = this.state.currentDialog;
		if (next) {
			this.setState({
				currentDialog: dialogs[next]
			});
		} else {
			this.setState({
				lastPage: true
			});
		}
	}

	getControllers = (type) => {
		switch (type) {
			case 'MESSAGE':
				return null;
			case 'SELECT_USERS':
				return (<Users />);
		}
	}




  render() {
		const { audio, ua_message, type } = this.state.currentDialog;
    return (
			<div className="page-layout">
				<HelloPage
					audio={audio}
					message={ua_message}
					controllers={this.getControllers(type)}
					onClick={this.onSubmit}
					lastPage={this.state.lastPage} />
			</div>
    ); 
  }
}

export default PagesContainer;
