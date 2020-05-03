import RichEditorExample from './draft';
import Btn from './button';
import Inp from './input';
import GetData from './getdata';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
	constructor() {
		super();
		this.raw_state = '';
		var _raw = ''
		var express_server = '/content';
		fetch(express_server, {
			method: 'GET',
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

	saving_function(raw_state) {
		var data = { raw_state: raw_state };
		var express_server = '/content';
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