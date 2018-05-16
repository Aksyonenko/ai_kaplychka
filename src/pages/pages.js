import React, { Component } from 'react';
import Audio from './../components/Audio';
import RaisedButton from 'material-ui/RaisedButton';

export class HelloPage extends Component {
	state = {
		nextButtonDisabled: true
	}
	onAudioEnded = () => {
		this.setState({
			nextButtonDisabled: false
		});
	}

	onClickNext = () => {
		this.setState({
			nextButtonDisabled: true,
		});
		this.props.onClick();
	}
	render() {
		const {message, audio, controllers} = this.props;
		return (
			<div>
				<h1>{message}</h1>
				{controllers}
				<Audio src={audio}
					onEnded={this.onAudioEnded}/>
				<RaisedButton label="Далі"
					primary={true} 
					onClick={this.onClickNext} 
					disabled={!this.props.lastPage && this.state.nextButtonDisabled} />
			</div>
		);
	}
}


