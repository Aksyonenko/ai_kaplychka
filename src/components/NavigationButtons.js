import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


const NavigationButtons = (props) => (
	<div style={{marginTop: 12}}>
	<FlatButton
		label="Back"
		disabled={props.stepIndex === 0}
		onClick={props.handlePrev}
		style={{marginRight: 12}}
	/>
	<RaisedButton
		label={props.stepIndex === props.stepsSize ? 'Finish' : 'Next'}
		primary={true}
		onClick={props.handleNext}
	/>
</div>);

export default NavigationButtons;