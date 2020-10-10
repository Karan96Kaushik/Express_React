import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
// import './style.css';
//import Combo from './search'
import Btn from './mui_button';
//import Inp from './mui_input';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import swal from 'sweetalert';
import { Line, Circle } from 'rc-progress';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
// import classes from '*.module.css';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.primary.dark
    },
    mainDiv: {
        paddingTop: "50px",
        margin: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "300px",
        alignContent: "center",
    },
    items: {
        margin: "15px",
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
    constructor(props) {
        super(props);
        // const { classes } = this.props;
        this._value = ''
        this.promiseOptions = this.promiseOptions.bind(this);
        this._downlaod = this._downlaod.bind(this);
        this.get_status = this.get_status.bind(this);

        this.state = {
            anime: '',
            options: [],
            chapter: '',
            status: []
        };

        setInterval(() => {
            this.get_status()
        }, 1000);

    }

    handleClick = (obj) => {
        if (obj.enable) {
            var win = window.open("http://creepyfuck.tech" + obj.loc, '_blank');
            // var win = window.open("http://localhost" + obj.loc, '_blank');
            win.focus();
        }
    }

    get_status = () => {
        // var link = 'http://localhost:3333/status'
        var link = 'http://creepyfuck.tech/status'

        fetch(link, {
            method: 'GET',
            //mode: 'no-cors',
        })
            .then(response => response.json())
            .then(data => {
                console.log("STATUS", data)

                var keys = Object.keys(data).slice(0, 10)
                var stuff = []

                keys.map((el) => {
                    var obj = ({
                        name: el,
                        status: (data[el][0] / data[el][1]) * 100,
                        loc: data[el][2],
                        started: data[el][3],
                        enable: false,
                        color: '#3FC7FA'
                    })

                    if (obj.status == 100) {
                        obj.enable = true
                        obj.color = '#85D262'
                    }

                    stuff.push(obj)
                })

                stuff.sort(function (b, a) {
                    var keyA = a.started;
                    var keyB = b.started;
                    // Compare the 2 dates
                    if (keyA < keyB) return -1;
                    if (keyA > keyB) return 1;
                    return 0;
                });

                //console.log('Success:', data);
                this.setState({ status: stuff })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                                label: el.name,
                                value: el.url
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

        // var link = 'http://localhost:3333/anime_list?url=' + encodeURIComponent(this.state.anime)
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
            fname: "$$" + this.state.chapter
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
            // fetch('http://localhost:3333/down?' + serialize(data), {
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
            <div>
                <Grid container>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <div className={this.props.classes.mainDiv}>
						<Typography variant="h3" color="primary">Manga Owl</Typography>
                            <AsyncSelect className={this.props.classes.items} label="Search Manga" cacheOptions defaultOptions loadOptions={this.promiseOptions} onChange={this.selected_anime} />
                            <Select className={this.props.classes.items} label="Select Chapter" options={this.state.options} onChange={this.selected_chap} />
                            <Btn
                                _onClick={this._downlaod}
                                _onFocus={this._downlaod}
                                _text={'Download'}
                            />

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
                                    <p style={{ color: "white" }}>{item.name}</p>
                                    <Circle percent={item.status} strokeWidth="4" strokeColor={item.color} style={{ height: "90px" }} />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            ))}
                            <a href='http://creepyfuck.tech/Manga/'>
                                <img alt='Open Comics' src='/react/comic.png' height='80px' />
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);
// export default App