import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
import './style.css';
//import Combo from './search'
import Btn from './mui_button';
//import Inp from './mui_input';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import swal from 'sweetalert';
import { Line, Circle } from 'rc-progress';

class App extends Component {
	constructor() {
		super();
		this._value = ''
		this.promiseOptions = this.promiseOptions.bind(this);
		this._downlaod = this._downlaod.bind(this);
		// this.get_status = this.get_status.bind(this);

		this.state = {
			anime: '',
			options: [],
			links: [],
			chapter: '',
			status: []
		};


    }

	handleClick = (obj) => {
		if(obj.enable) {
			// var win = window.open("http://creepyfuck.tech" + obj.loc, '_blank');
			var win = window.open("http://localhost" + obj.loc, '_blank');
			win.focus();
		}
	}

	promiseOptions(e) {
		var data = e

		if (data.length > 3) {
			console.log("Search for", data)

			var link = 'http://localhost:3333/gogo_search?string=' + encodeURIComponent(data)
			// var link = 'http://creepyfuck.tech/gogo_search?string=' + encodeURIComponent(data)
			console.log('LINK', link)

			return new Promise(resolve => {

				fetch(link, {
					method: 'GET',
					//mode: 'no-cors',
				})
					.then(response => response.json())
					.then(data => {
						console.log('Success:', data);
						// var list = []
						// data.map((el) => {
						// 	list.push({
						// 		label: el.name,
						// 		value: el.value
						// 	})
						// })

						resolve(data)
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
		this.state.anime = url.value;
        console.log("Selected Anime URL", url)
		var link = 'http://localhost:3333/gogo_eps?url=' + encodeURIComponent(this.state.anime)
		// var link = 'http://creepyfuck.tech/gogo_eps?url=' + encodeURIComponent(this.state.anime)

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
						label: el.name,
						value: el.url
					})
				})

				this.setState({ options: data })
				//setList(data)
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	}

	selected_chap = (chap) => {
		this.setState({ chapter: chap.value })
	}

	_downlaod() {
		var data = {
			url: this.state.chapter
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

		// fetch('http://creepyfuck.tech/gogo_video?' + serialize(data), {
		fetch('http://localhost:4545/gogo_episode_link?' + serialize(data), {
			// fetch('http://localhost:3333/gogo_video?' + serialize(data), {
			method: 'GET',
		})
			.then(response => response.json())
			.then(data => {
                console.log('Success:', data);
                this.setState({links: [data]})

			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	render() {
		return (
			<div style={{ width: "70%", textAlign: 'center', marginRight: '15%', marginLeft: "15%" }}>
				<br></br>
				<AsyncSelect label="Search Anime" cacheOptions defaultOptions loadOptions={this.promiseOptions} onChange={this.selected_anime} />
				<br></br>
				<Select label="Select Episodes" options={this.state.options} onChange={this.selected_chap} />
				<br></br>
				<br></br>
				<Btn
					_onClick={this._downlaod}
					_onFocus={this._downlaod}
					_text={'Find Download Link'}
				/>
				<br></br>
				
				{/* <List>
					{this.state.status.map((item) => (
						<ListItem button style={{ color: 'white', textSecondary: 'red' }} onClick={console.log()}>
							<div>
							<ListItemText primary={item}/>
							<Circle percent="10" strokeWidth="4" strokeColor="#85D262" style={{ height: "10%" }} />
							</div>
						</ListItem>
					))}
				</List> */}
				{this.state.status.map((item) => (
					<div onClick={() => this.handleClick(item)}>
					<p style={{color:"white"}}>{item.name}</p>
					<Circle percent={item.status} strokeWidth="4" strokeColor={item.color} style={{ height: "90px" }} />
					<br></br>
					<br></br>
					<br></br>
					</div>
				))}
                {this.state.links.map((item) => (
					// <Link to={item.link} target="_blank" download>Download</Link>
					<a href={item.link} download={item.name.trim()}>
						{item.name}
                    </a>
				))}
			</div>
			// <Combo />
		);
	}
}

export default App