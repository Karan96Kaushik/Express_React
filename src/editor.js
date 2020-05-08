import RichEditorExample from './draft';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import LoginContext from './mycontext'

class App extends Component {
	static contextType = LoginContext;

	constructor() {
		super();
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
				<div>{}</div>
				<br />
				<div className="side-padding-20">
					<RichEditorExample
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
			</div>
		);
	}
}

export default App;