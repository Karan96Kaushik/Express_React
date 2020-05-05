import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	boot: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
			color: 'white',
			textAlign: 'left',
			borderColor: 'yellow'
		},
		'& label': {
			color: 'grey',
			fontSize: '10px'
		},
		'& label.Mui-focused': {
			color: 'white',
		},
		'& .MuiInput-underline': {
			borderBottomColor: 'yellow',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
	},
	overrides: {
		MuiInput: {
		  underline: {
			"&:before": {
			  borderBottom: `1px solid ${'grey'}`
			}
		  }
		}
	  }
}));

export default function BasicTextFields(props) {
	const classes = useStyles();
	const [_value, setValue] = useState('');

	return (
		<TextField onChange={props._onChange} spellCheck={false} className={classes.boot} id="custom-css-standard-input" label="Link" />
	);
}