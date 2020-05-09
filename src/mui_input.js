import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { PinDropSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	boot: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
			color: 'black',
			textAlign: 'left',
			borderColor: 'yellow'
		},
		'& label': {
			color: 'black',
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
	var label = props._label ? props._label: ""
	const classes = useStyles();

	return (
		<TextField
			onChange={props._onChange}
			spellCheck={false}
			className={classes.boot}
			label={label}
			value={props._value}
			/>
	);
}