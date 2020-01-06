import React from 'react';
import Typist from 'react-typist';

const Message =  ({text}) => (
	<Typist cursor ={{show: false}}  key={text.substr(0, 3)}><h1>{text}</h1></Typist>
);

export default Message;