import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
import './style.css';
//import Combo from './search'
import Btn from './mui_button';
//import Inp from './mui_input';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import swal from 'sweetalert';

class App extends Component {
	constructor() {
		super();
		this._value = ''
		this.promiseOptions = this.promiseOptions.bind(this);
		this._downlaod = this._downlaod.bind(this);

		this.state = {
			anime : '',
			options: [],
			chapter: ''
		};
	}

	promiseOptions(e) {
		var data = e

		if (data.length > 3) {
			console.log(data)

			var link = 'https://mangaowl.net/live_search/' + encodeURIComponent(data)
			console.log('LINK', link)

			return new Promise(resolve => {

				fetch(link, {
					method: 'GET',
					//mode: 'no-cors',
				})
					.then(response => response.json())
					.then(data => {
						console.log('Success:', data);
						var list = []
						data.map((el) => {
							list.push({
								label:el.name,
								value:el.url
							})
						})

						resolve(list)
						//setList(data)
					})
					.catch((error) => {
						console.error('Error:', error);
					});

				//setList(values)

				//console.log(list_values)
			});
		} else {
			return new Promise(resolve => {
				resolve([
					//{ label: "Hi", value: 1 },
					//{ label: "Hello", value: 1 }
				])
			});
		}
	}

	selected_anime = (url) => {
		//console.log('',this._value,'','Selected URL', url.value );
		this.state.anime = "https://mangaowl.net" + url.value;
		
		var link = 'http://creepyfuck.tech/anime_list?url=' + encodeURIComponent(this.state.anime)

		fetch(link, {
			method: 'GET',
			//mode: 'no-cors',
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				var list = []
				data.map((el) => {
					list.push({
						label:el.name,
						value:el.url
					})
				})

				this.setState({options : data})
				//setList(data)
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	}

	selected_chap = (chap) => {
		this.setState({chapter : chap.value})
	}

	_downlaod() {
		var data = {
			fname: this.state.chapter
		}

		function serialize(obj) {
			var str = [];
			for (var p in obj)
				if (obj.hasOwnProperty(p)) {
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				}
			return str.join("&");
		}

		//swal('Downloading', data)

		fetch('http://creepyfuck.tech/down?' + serialize(data), {
		//fetch('http://localhost:3333/down?' + serialize(data), {
			method: 'POST',
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				swal('Downloading', data[0])

			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	render() {
		return (
			<div style={{width:"70%", textAlign:'center', marginRight:'15%', marginLeft:"15%"}}>
			<br></br>
			<AsyncSelect cacheOptions defaultOptions loadOptions={this.promiseOptions} onChange={this.selected_anime} />
			<br></br>
			<Select options={this.state.options} onChange={this.selected_chap}/>
			<br></br>
			<br></br>
			<Btn
				_onClick={this._downlaod}
				_onFocus={this._downlaod}
				_text={'Download'}
			/>
			</div>
			// <Combo />
		);
	}
}

export default App