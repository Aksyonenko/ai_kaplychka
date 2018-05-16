import React, { Component } from 'react';


class Audio extends Component {

	render() {
		return (<audio autoPlay ref="audio" onEnded={this.props.onEnded} src={this.props.src} >
		</audio>)
	}
}

export default Audio;