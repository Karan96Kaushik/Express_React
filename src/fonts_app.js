import '@progress/kendo-theme-default/dist/all.css';
import React, { Component } from 'react';
import './style.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Btn from './mui_button';
import Inp from './mui_input';
//import GetData from './getdata';
import grey from '@material-ui/core/colors/grey'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
//import './font_extractor/unifont_module'
import fontify from 'unifont'
import { dark } from '@material-ui/core/styles/createPalette';



console.log()

var grey400 = grey
grey400.main = grey400[500]

const theme = createMuiTheme({
    palette: {
        //  primary: 'white',
        secondary: grey400,
    },
    status: {
        danger: 'orange',
    },
    root: {
        textAlign: 'center'
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        var fonts = ['normalEn', 'BorderBlock', 'DotBlock', 'GaintBold', 'Btalic', 'GaintItalic', 'Alphol', 'Bubble', 'BubbleFill', 'Cursive']

        this.data = []

        fonts.map((font) => {
            var option = {
                font: font,
                style: ""
            }

            this.data.push(fontify("Fontify text", option));
        })

        this.state = {
            _text: 'Fontify text',
            _data: this.data,
        }

        this._changed_name = this._changed_name.bind(this)
    }

    async _changed_name(state) {
        this.state._text = state.target.value

        var fonts = ['normalEn', 'BorderBlock', 'DotBlock', 'GaintBold', 'Btalic', 'GaintItalic', 'Alphol', 'Bubble', 'BubbleFill', 'Cursive']

        function get_data(_text) {
            if(_text == '') {
                _text = ' '
            }

            var data = []
            fonts.map((font) => {
                var option = {
                    font: font,
                    style: ""
                }

                data.push(fontify(_text, option));
            })
            console.log(data)
            return data;
        }

        this.setState({
            _data: get_data(state.target.value)
        });
    }

    _get_list() {
        console.log(this.state)
        var data = []
        this.setState(prevState => ({
            list: data
        }))
    }

    handleListItemClick = (item) => {
        var win = window.open(item.link, '_blank');
        win.focus();
    }

    render() {
        console.log(this.state)

        return (
                <div>
                    <div className="side-padding-20">
                        <Inp
                            _value={this.state._text}
                            _onChange={this._changed_name}
                            _label={'Enter Text'}
                        />
                        <List>
                            {this.state._data.map((data) => (
                                <ListItem button onClick={() => this.handleListItemClick(data)} >
                                    <ListItemText primary={data} />
                                </ListItem>
                            ))}
                        </List>
                    </div>

                    <br />
                </div>
        );
    }
}

export default App