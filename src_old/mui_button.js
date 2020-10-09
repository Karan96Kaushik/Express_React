import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            backgroundColor: '#d9d9d9',
            color: 'black',
            margin: theme.spacing(1),
        },
    },
    button: {
        '&:hover': {
            backgroundColor: 'grey',
        },
    },
}));

export default function ContainedButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.button} onFocus={props._onFocus} onClick={props._onClick} variant="contained" color="primary">
                {props._text}
      </Button>
        </div>
    );
}