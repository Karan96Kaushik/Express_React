import RichEditorExample from './draft';
import React, { Component } from 'react';
import { render } from 'react-dom';
// import LoginContext from './mycontext'
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.primary.dark
	},
	mainDiv: {
		paddingTop: "50px",
		margin: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		height: "300px",
		alignContent: "center",
	},
	items: {
		width: "100%",
	},
	buttonCollapse: {
		[theme.breakpoints.up("sm")]: {
			display: "none"
		},
		margin: "5px",
		boxShadow: "none",
		marginRight: "10px",
	},
	MenuButton: {
		color: theme.palette.background.primary.light,
		fontSize: "35px",
	},
});

class App extends Component {
	// static contextType = LoginContext;

	constructor(props) {
		super(props);
		this.raw_state = '';
		var _raw = ''
		var express_server = '/react/getcontent';

		var data = {
			account: window.localStorage.getItem('sel_account'),
		}

		console.log('GET Data', data)

		fetch(express_server, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(response => response.json()).then(data => {

			if (data.raw_state) {
				this.myRef.current.set_editor(data.raw_state)
			}

		}).catch((error) => {
			console.error('Error:', error);
		});

		this.state = {
			name: 'React'
		};

		this.myRef = React.createRef()
	}

	componentDidMount() {
		this.user = this.context
		setTimeout(() => {
			console.log('USER', this.user)
		}, 5000);
	}

	saving_function(raw_state) {

		var data = {
			raw_state: raw_state,
			account: window.localStorage.getItem('sel_account'),
		};
		console.log('Post Data', data)

		var express_server = '/react/content';
		fetch(express_server, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	}

	render() {
		return (

			<div>
				<Grid container>
					<Grid item xs={12} md={3}></Grid>
					<Grid item xs={12} md={6}>
						<div>
							<br />
							<div className={this.props.classes.mainDiv}>
						<Typography variant="h3" color="primary">Text Editor</Typography>
								<RichEditorExample
									className={this.props.classes.items}
									my_func={this.saving_function}
									editorState={this.state.editorState}
									raw_state={this.raw_state}
									onChange={this.onChange}
									handleBeforeInput={this._handleBeforeInput}
									handlePastedText={this._handlePastedText}
									ref={this.myRef}

								/>
							</div>

							<br />
							<div>

							</div>
						</div></Grid>
					<Grid item xs={12} md={3}></Grid>
				</Grid>
			</div>


		);
	}
}

export default withStyles(styles)(App);
