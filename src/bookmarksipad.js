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
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    handleListItemClick = (item) => {
        var win = window.open(item.link, '_blank');
        win.focus();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <div className="side-padding-20">
                        <List>
                            {this.props.list_arr.map((bookmark) => (
                                <ListItem button style={{ color: 'white', textSecondary: 'red' }} onClick={() => this.handleListItemClick(bookmark)} key={bookmark}>
                                    <ListItemText secondary={bookmark.link} primary={bookmark.name} secondaryTypographyProps={{ color: 'secondary' }} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <br />
                </div>
            </ThemeProvider>
        );
    }
}

export default App