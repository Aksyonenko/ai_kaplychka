import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { MessageButtonPage, MessageDelayPage, SelectUsersPage, NotRobotPage, TakePhotoPage } from './pages';
import { ActionAssignmentTurnedIn } from 'material-ui';
import dialogs from './../dialogs';
import CustomCheckbox from './../components/CustomCheckbox';

class PagesContainer extends Component {
	state = {
		currentDialog: dialogs.WELCOME,
		users: [],
		lastPage: false
	}

	onUsersSelect = (users) => {
		this.setState({users: users});
		this.nextDialog();
	}


	nextDialog = () => {
		const { next } = this.state.currentDialog;
		if (next) {
			this.setState({
				currentDialog: dialogs[next]
			});
		} else {
			this.setState({
				currentDialog: dialogs.WELCOME
			});
		}
	}

	getRandomUser = (users) => {
		const name = users[Math.floor(Math.random() * users.length)];
		return name;
	}


  render() {
		const dialog = this.state.currentDialog;
		let { audio, ua_message, type,  change_pattern } = dialog;

		if (change_pattern) {
			if (change_pattern === "#users") {
				ua_message = ua_message.replace("#users", this.state.users.join(' та '));
			} else {
				ua_message = ua_message.replace("#user", this.getRandomUser(this.state.users));
			}
		}

		let audioSrc = audio ? audio : encodeURI('http://azf1073259.ukrdomen.com/speak.php?text=' + ua_message);

		let page;
		switch (type) {
			case 'MESSAGE_DELAY':
				page = <MessageDelayPage message={ua_message} audio={audioSrc} delay={dialog.delay} action={this.nextDialog}/>;
				break;
			case 'MESSAGE_BUTTON':	
				page = <MessageButtonPage message={ua_message} audio={audioSrc} label={dialog.label} action={this.nextDialog}/>;
				break;
			case 'SELECT_USERS':	
				page = <SelectUsersPage message={ua_message} audio={audioSrc} label={dialog.label} onUsersSelect={this.onUsersSelect}/>;
				break;
			case 'NOT_ROBOT':
				page = <NotRobotPage  message={ua_message} audio={audioSrc} label={dialog.label} action={this.nextDialog}/>;
				break;
			case 'TAKE_PHOTO':
				page = <TakePhotoPage  label={dialog.label} action={this.nextDialog} />;
				break;
			// case 'CERTIFICATE':
			// 	page = <MessageDelayPage message="Certificate" action={() => {}}/>;
			// 	break;
		}


    return (
			{page}
    ); 
  }
}

export default PagesContainer;
