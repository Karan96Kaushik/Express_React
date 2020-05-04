import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Manga from './manga';
import MyEditor from './editor';
import Btn from './button';
import { Editor } from 'draft-js';
import Top from './_top_bar';
import Nav from './nav_bar';


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
				<div className="side-padding-20">
					<Btn
						_onClick={this._manga}
						_text={'Manga Downloader'}
					/>
					<br />
					<br />
					<Btn
						_onClick={this._editor}
						_text={'Editor'}
					/>
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
						src="/nature.png"
						height='100px'
					/>
				</div>
			</div>
		);
	}
}

render([<Nav comps={['My', 'Comps']}/>], document.getElementById('top'));
render([<Head />], document.getElementById('head'));
render([<App />], document.getElementById('root'));
render([<Base />], document.getElementById('base'));