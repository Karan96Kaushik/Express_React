import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
import './style.css';

import Btn from './mui_button';
import Inp from './mui_input';
import GetData from './getdata';

class App extends Component {
	constructor() {
		super();
		this._value = ''
		this._downlaod = this._downlaod.bind(this);
	}

	_changed = (state) => {
		this._value = (state.target.value);
	}

	_downlaod() {
		var val = this._value
		var data = {
			fname: this._value
		}

		function serialize(obj) {
			var str = [];
			for (var p in obj)
			  if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			  }
			return str.join("&");
		  }


		fetch('http://creepyfuck.tech/down?' + serialize(data), {
			method: 'POST',
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
				{/* <img src='/comic.png' height='100px' /> */}
				<div className="side-padding-20">
					<Inp
						_onChange={this._changed}
					/>
					<Btn 
						_onClick={this._downlaod}
						_text={'Download'}
					/>
					<br />
					<a href='http://creepyfuck.tech/Manga/'>
						<img src='/react/comic.png' height='50px' />
					</a>
				</div>

				<br />
			</div>
		);
	}
}

export default App