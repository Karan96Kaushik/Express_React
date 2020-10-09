import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { PinDropSharp } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

export default function ComboBox() {
	
	const [list_values, setList] = React.useState([]);

	console.log(list_values)

	function _selected(target, option) {
		console.log(option)
	}

	function _enterd_data(e) {
		var data = e.target.value

		if(data.length > 3) {
		//console.log(data)

        var link = 'https://mangaowl.net/live_search/' + encodeURIComponent(data)
		console.log('LINK', link)
		fetch( link, {
			method: 'GET',
			//mode: 'no-cors',
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				setList(data)
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		//setList(values)

		console.log(list_values)
		}
		
	}

	return (
	  <div textAlign={'center'}>
	  <Autocomplete
		id="combo-box-demo"
		options={list_values}
		getOptionLabel={(option) => option.name}
		clearOnBlur={false}
		onInputChange={_enterd_data}
		onChange={_selected}
		style={{ width: 300 }}
		renderInput={(params) => <TextField {...params} textAlign={'center'} value="Combo box" variant="outlined" />}
	  />
	  </div>
	);
  }
