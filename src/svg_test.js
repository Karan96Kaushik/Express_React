import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import HHome from './social_svg';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > svg': {
            margin: theme.spacing(2),
        },
    },
}));

function HomeIcon(props) {
    console.log('social.png')

    return (
        < SvgIcon {...props}>
           <HHome />
        </SvgIcon >
    );
}

export default HomeIcon