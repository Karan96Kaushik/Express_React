import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Top from './_top_bar';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        background: '#d9d9d9'
    },
});

export default function TemporaryDrawer(props) {
    const list_comps = props.comps
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor, list_comps) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <img
                style={{padding: '10px'}}
                src="/react/journey.png"
                height='75px'
            />
            <Divider />
            <List >
                {list_comps.map((button, index) => (
                    <ListItem button onClick={() => { button._onClick(); toggleDrawer(anchor, true) }} key={button._text}>
                        <ListItemIcon> {<button._icon />}</ListItemIcon>
                        <ListItemText primary={button._text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <React.Fragment key={'bar'}>
                <Top menu_onClick={toggleDrawer('bar', true)} />
                <Drawer classes={{ paper: classes.paper }} anchor={'left'} open={state['bar']} onClose={toggleDrawer('bar', false)}>
                    {list('bar', list_comps)}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
