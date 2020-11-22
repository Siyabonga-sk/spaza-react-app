import React from 'react';
import {
  Box, List, ListItem, 
  ListItemIcon, ListItemText, Drawer, Typography, Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import sideNavbarList from './sidebarList';

const useStyles = makeStyles((theme) => ({
	/*side bar styles start*/
    Drawer:{
      /*width: '100%',
      [theme.breakpoints.up('sm')]:{
        width: '240px',*/
        flexShrink: 0,
      //},
    },
    
    drawePaper: {
      width: '250px',
      [theme.breakpoints.down('xs')]:{
        width: '100%',
        height: '100%',
        top: '0px',
      },
      height: '315px',
      top: '58px',
      background: 'linear-gradient(#010b1a, #000612)',
      color: 'snow',
    },

    Title:{
      color: "gray",
    },

    items: { 
      color: 'gray',
      justifyContent: 'center',
      "&:hover": { color: theme.palette.warning.light },
    },
    header: {
      height: '25%',
      background: 'snow',
      display: 'flex',
      justifyContent: 'center',
    },

    divider: {
      color: 'snow',
      width: '8px',
    },
    //end sideBar styles
}));


function SideNavbar (props) {

	const classes = useStyles();

	const sideList = (
	    <Box onClick={props.Open}>
	      <List>
	        {
	          sideNavbarList.map((item, index) => {
	            const { text, icon, /*onClick*/ } = item;
	            return(
                <div className={classes.items}>
	              <ListItem button key={index} /*onClick={onClick}*/>
	                {icon && <ListItemIcon>{icon}</ListItemIcon>}
	                <ListItemText primary={text}/>
	              </ListItem>
                </div>
	            );
	          })
	        }
	      </List>
	    </Box>
  ) ;

	return(
		<nav className={classes.Drawer}>
        <Drawer
          variant="temporary"
          open={props.State}
          anchor="left"
          onClose={props.Close}
          classes={{ paper: classes.drawePaper,}}
          ModalProps={{ keepMounted: true, }}
		>
          <Box className={classes.header}>
            <Typography className={classes.Title} variant="body">
              Account holder
            </Typography>
          </Box>
          <Divider className={classes.divider}/>
          {sideList}
        </Drawer>
      </nav>

	)
}

export default SideNavbar;