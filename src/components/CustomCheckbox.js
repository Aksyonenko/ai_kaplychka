import React from 'react';
import Checkbox from 'material-ui/Checkbox';

export default ({onCheck, label}) => (
	<Checkbox onCheck={onCheck} label={label}/>
);