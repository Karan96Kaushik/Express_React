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
import {CopyToClipboard} from 'react-copy-to-clipboard';


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

                this.data.push({
                    font: font,
                    data: fontify("Fontify Text", option)
                });
            })

        this.state = {
            _text: 'Fontify text',
            _data: this.data,
        }

        this._changed_name = this._changed_name.bind(this)
        //this.handleListItemClick = this.handleListItemClick.bind(this);
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

                data.push({
                    font: font,
                    data: fontify(_text, option)
                });
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

    handleListItemClick(e) {
        // function _copyText(element) {
        //     var range, selection, worked;
          
        //     if (document.body.createTextRange) {
        //       range = document.body.createTextRange();
        //       range.moveToElementText(element);
        //       range.select();
        //     } else if (window.getSelection) {
        //       selection = window.getSelection();        
        //       range = document.createRange();
        //       range.selectNodeContents(element);
        //       selection.removeAllRanges();
        //       selection.addRange(range);
        //     }
            
        //     try {
        //       document.execCommand('copy');
        //       alert('text copied');
        //     }
        //     catch (err) {
        //       alert('unable to copy text');
        //     }
        //   }
        // console.log('EVENT', e)
        // var copyText = document.getElementById(e);
        // _copyText(copyText)
        // console.log("HTML", copyText.innerHTML)
        // CopyToClipboard(copyText.innerHTML)
        //copyText.select();
        //document.execCommand("copy");
        // var win = window.open(item.link, '_blank');
        // win.focus();
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
                                <ListItem button onClick={() => this.handleListItemClick(data.font)} id={data.font} >
                                    <ListItemText primary={data.data} />
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