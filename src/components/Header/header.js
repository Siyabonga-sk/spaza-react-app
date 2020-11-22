import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//import { Box, Grid, Typography } from '@material-ui/core';


const useStyles= makeStyles(theme => ({
    root: {
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 2,
        position: 'absolute',
        top: '45px',
        left: 0,
        width: '100%',
    },
}));

const Header = () => {
    const classes = useStyles();

    return ( 
        <p className={classes.root}>this is the content</p>
    )
}

export default Header;
