import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Manga from './manga';
import MyEditor from './editor';
import Btn from './mui_button';
import { Editor } from 'draft-js';
import Top from './_top_bar';
import Nav from './nav_bar';
import { ImportContacts, Edit } from '@material-ui/icons';


class App extends Component {
	constructor() {
		super()
	}

	_manga() {
		render(<Manga />, document.getElementById('root'))
	}

	_editor() {
		render(<MyEditor />, document.getElementById('root'))
	}

	render() {
		return (
			<div>
				<img
					src="/react/giphy1.webp"
					style={{
						width: '12em', /* width of container */
					}}
				/>
				<div className="side-padding-20">
					{/* <Btn
						_onClick={this._manga}
						_text={'Manga Downloader'}
					/>
					<Btn
						_onClick={this._editor}
						_text={'Editor'}
					/> */}
				</div>

				<br />
				<div>

				</div>
			</div>
		);
	}
}

class Base extends Component {
	constructor() {
		super()
	}

	_back() {
		render(<App />, document.getElementById('root'))
	}

	render() {
		return (
			<div>
				<div className="side-padding-20">
					<Btn
						_onClick={this._back}
						_icon={'undo'}
					/>
				</div>

				<br />
				<div>

				</div>
			</div>
		);
	}
}

class Head extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<div className="side-padding-20">
					<img
						src="/react/nature.png"
						height='100px'
					/>
				</div>
			</div>
		);
	}
}

class NavBar extends Component {
	constructor() {
		super()
		this.buttons = [
			{
				_text: 'Manga Downloader',
				_onClick: this._manga_click,
				_icon: ImportContacts
			},
			{
				_text: 'Editor',
				_onClick: this._editor_click,
				_icon: Edit
			}
		]

	}

	_manga_click() {
		render([<Head />], document.getElementById('head'));
		render([<Manga />], document.getElementById('root'));
	}

	_editor_click() {
		render([<Head />], document.getElementById('head'));
		render([<MyEditor />], document.getElementById('root'));
	}

	render() {
		return (
			<Nav comps={this.buttons} />
		);
	}
}

render([<NavBar />], document.getElementById('top'));
//render([<Head />], document.getElementById('head'));
render([<App />], document.getElementById('root'));
//render([<Base />], document.getElementById('base'));