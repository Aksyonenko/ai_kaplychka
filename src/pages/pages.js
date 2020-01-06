import React, { Component } from 'react';
import Audio from './../components/Audio';
import Message from './../components/Message';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import CustomCheckbox from './../components/CustomCheckbox';
import Webcam from 'react-webcam';
import $ from 'jquery';


export class MessageButtonPage extends Component {
	state = {
		audioEnded: false
	}

	onAudioEnded = () =>(this.setState({audioEnded: true}))

	render() {
		const { message, label, audio, action } = this.props;
		return (
			<div>
				<Message text={message} />
				<Audio src={audio} onEnded={this.onAudioEnded}/>
				<RaisedButton label={label}
					primary={true} 
					onClick={action}
					disabled={!this.state.audioEnded} />
			</div>
		);
	}
}

export class MessageDelayPage extends Component {

	render() {
		const { message, audio, action } = this.props;
		return (
			<div>
				<Message text={message} />
				<Audio src={audio} onEnded={action}/>
			</div>
		);
	}
}


export class NotRobotPage extends Component {
	
	render() {
		const { message, audio, action, label } = this.props;
		return (
			<div>
				<Message text={message} />
				<Audio src={audio}/>
				<CustomCheckbox label={label} onCheck={action}/>
			</div>
		);
	}
}


export class SelectUsersPage extends Component {

	state = {
		numOfUsers: 0,
		users: []
	}

	handleChange = (event, index, value) => this.setState({numOfUsers: value});

	handleUserNameChange = (value, i) => {
		const updatedUsers = [...this.state.users];
		updatedUsers[i] = value;
		this.setState({users: updatedUsers})
	}



	render() {
		const {message, label, audio, onUsersSelect } = this.props;

		let userFields = [];
		for (let i = 0; i < this.state.numOfUsers; i++) {
			userFields.push(
			<div  key={i}>
				<TextField hintText={`Ім\'я учасника № ${i + 1}`}
					onChange={(event) => this.handleUserNameChange(event.target.value, i)}/>
			</div>);
		}

		return (
			<div>
				<div>
					<Message text={message} />
					<Audio src={audio} />
					<SelectField onChange={this.handleChange}
						floatingLabelText={"Оберіть кількість учасників"} >
						<MenuItem value={2} primaryText="2" />
						<MenuItem value={3} primaryText="3" />
						<MenuItem value={4} primaryText="4" />
					</SelectField>
					{userFields}
				</div>
				<RaisedButton label={label}
					primary={true} 
					disabled={this.state.numOfUsers === 0 || this.state.numOfUsers != this.state.users.filter((e) => e != "").length}
					onClick={() => onUsersSelect(this.state.users)} />
			</div>
		);
	}
}


export class TakePhotoPage extends Component {
	state = {
		imageSrc: undefined
	}

	setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    this.setState({imageSrc: this.webcam.getScreenshot()});
	};
	
	uploadPhoto = () => {
		const formData = new FormData();
		formData.append('upload_preset', 'jjdhhg3w');
		formData.append('tags', 'browser_upload');
		formData.append('file', this.state.imageSrc);
          $.ajax({
           url: 'https://api.cloudinary.com/v1_1/duw0omgnx/image/upload',
					 type: 'POST',
					 data: {'upload_preset': 'jjdhhg3w',
						'tags': ['browser_upload'],
						'file': this.state.imageSrc
						},
           success: function (response) {
               console.log(response);
           }
       });
	}

  render() {
    return (
      <div style={{marginTop: '-100px'}}>
				<div style={{display: 'inline-flex'}}>
					<div style={{ marginTop: '44px', marginRight: '20px'}}>
						{this.state.imageSrc && <img src={this.state.imageSrc} />}
					</div>
					<div>		
						<Webcam
							audio={false}
							height={350}
							ref={this.setRef}
							screenshotFormat="image/jpeg"
							width={350}
						/>
					</div>	
				</div>
				<div>
					<RaisedButton label={this.props.label}
						primary={true} 
						onClick={this.capture}
						style={{margin: '10px'}} />
					<RaisedButton label="Далі"
						primary={true} 
						disabled={!this.state.imageSrc}
						onClick={() => {
							this.uploadPhoto();
							 this.props.action();
						}}
						style={{margin: '10px'}} />
				</div>
      </div>
    );
  }
}