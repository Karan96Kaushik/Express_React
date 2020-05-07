import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Manga from './manga';
import Bookmarks from './bookmark';
import MyEditor from './editor';
import Btn from './mui_button';
import { Editor } from 'draft-js';
import Top from './_top_bar';
import Nav from './nav_bar';
import { ImportContacts, Edit, Bookmark } from '@material-ui/icons';
import {SocialIcon, WritingIcon, LibraryIcon} from './social_svg';
//import {WritingIcon} from './social_svg';

var current_page = 'home'

class App extends Component {
	constructor() {
		super()
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
				_onClick: () => { this._openapp('manga') },
				_icon: SocialIcon
			},
			{
				_text: 'Editor',
				_onClick: () => { this._openapp('editor') },
				_icon: WritingIcon
			},
			{
				_text: 'Bookmarks',
				_onClick: () => { this._openapp('bookmarks') },
				_icon: LibraryIcon
			}
		]

	}

	_openapp = function (app_name) {
		current_page = app_name
		render([<Head />], document.getElementById('head'));
		switch (app_name) {
			case 'manga':
				render([<Manga />], document.getElementById('root'));
				break;
			case 'editor':
				render([<MyEditor />], document.getElementById('root'));
				break;
			case 'bookmarks':
				render([<Bookmarks />], document.getElementById('root'));
				break;
			default:
				break;
		}
	}

	_login(account) {
		window.localStorage.setItem('sel_account', account);
		render([], document.getElementById('head'));
		render([<App />], document.getElementById('root'));
		console.log('ACCOUNT SELECTED', account)
	}

	render() {
		return (
			<Nav comps={this.buttons} login={this._login} />
		);
	}
}

render([<NavBar />], document.getElementById('top'));
//render([<Head />], document.getElementById('head'));
render([<App />], document.getElementById('root'));
//render([<Base />], document.getElementById('base'));