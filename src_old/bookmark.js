import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
import './style.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Btn from './mui_button';
import Inp from './mui_input';
//import GetData from './getdata';
import grey from '@material-ui/core/colors/grey'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

var grey400 = grey
grey400.main = grey400[500]

const theme = createMuiTheme({
	palette: {
		//  primary: 'white',
		secondary: grey400,
	},
	status: {
		danger: 'orange',
	},
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			_bm_name: '',
			_bm_val: ''
		}

		this.state.list.map(() => {
			console.log(1)
		})

		this._get_list = this._get_list.bind(this)
		this._add = this._add.bind(this)
		this._changed_name = this._changed_name.bind(this)
		this._changed_val = this._changed_val.bind(this)
		this._get_list()
	}

	_get_list() {
		console.log(this.state)

		fetch('/react/getbookmarks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({}),
		})
			.then(response => response.json())
			.then(data => {
				this.setState(prevState => ({
					list: data
				}))
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	}

	handleListItemClick = (item) => {
		var win = window.open(item.link, '_blank');
		win.focus();
	}

	_changed_name = (state) => {
		this.state._bm_name = state.target.value
		this.setState({
			_bm_name: (state.target.value)
		});
	}

	_changed_val = (state) => {
		this.state._bm_val = state.target.value
		this.setState({
			_bm_val: (state.target.value)
		});
	}

	_add() {

		console.log(this.state)

		var data = {
			name: this.state._bm_name,
			link: this.state._bm_val,
		}



		fetch('/react/addbookmarks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				this.setState(() => ({
					list: data
				}))
			})
			.catch((error) => {
				console.log('Error:', error);
			});
	}

	render() {
		console.log(this.state)

		return (
			<ThemeProvider theme={theme}>
				<div>
					{/* <img src='/comic.png' height='100px' /> */}
					<div className="side-padding-20">
						<Inp
							_value={this.state._bm_name}
							_onChange={this._changed_name}
							_label={'Name'}
						/>
						<Inp
							_value={this.state._bm_val}
							_onChange={this._changed_val}
							_label={'Link'}
						/>
						<Btn
							_onClick={this._add}
							_text={'Add'}
						/>
						<List>
							{this.state.list.map((bookmark) => (
								<ListItem button style={{ color: 'white', textSecondary: 'red' }} onClick={() => this.handleListItemClick(bookmark)} key={bookmark}>
									<ListItemText secondary={bookmark.link} primary={bookmark.name} secondaryTypographyProps={{ color: 'secondary' }} />
								</ListItem>
							))}
						</List>
					</div>

					<br />
				</div>
			</ThemeProvider>
		);
	}
}

export default App