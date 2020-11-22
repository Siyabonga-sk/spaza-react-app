import React, { useRef, useState, useEffect } from 'react';
import {
  AppBar, Toolbar,
  IconButton, Badge
} from '@material-ui/core';
import { 
  Menu, Search, 
  ShoppingBasket, Cancel } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
// import { withRouter } from 'react-router-dom';
import logo from './logoOrg.png';
// import clsx from 'clsx';
import SideNavbar from './drawer';
import PopupSearchBar from '../SearchBar/popupSearchBar';


const useStyles = makeStyles((theme) => ({
    mobileRoot: {
      flexGrow: 1,
      display: 'flex',
      position: 'static',
    },

    root: {
      margin: 0,
      padding: 0,
    },
    Badge: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },

    navigationBarTrans: {
      backgroundColor: 'transparent',
      height: 'auto',
      zIndex: 2,
      boxShadow: 'none',
    },

    navigationBarSolid: {
      backgroundColor: '#040E27',
      height: 'auto',
      zIndex: 2,
      opasity: 1,
      background: 'linear-gradient(#012d42,#09092d)',
    },

    Logo: {
      flexGrow: 1,
      margin: '6px',
    },

    menuButton: {
      marginRight: theme.spacing(2),
      '@media (max-width: 221px)': {
        marginRight: theme.spacing(1),
      },
    },

    iconButtons: {
      padding: '5px',
      transition: 'all 0.5s ease',
  
      [theme.breakpoints.up('sm')]:{
        fontSize: '2rem',
      },
      "&:hover": { color: theme.palette.warning.light },
      
    },
}));

function Navigation(props) {
  const classes = useStyles(props);

  {/*sidebar toggler states*/}
  const [state, setState] = useState({left: false});
  
  const toggleDrawer = (slider, open) => () => {
    setState({...state, [slider]: open} )
  }

  {/* topNavBar color change state */}
  const [navBackground, setNavBackground]= useState('navigationBarTrans');

  {/*icons color change */}
  const [iconColor, setIconColor] = useState(false)

  {/*popup modal states */}
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  /*end popup modal state*/

  {/*geting scroll position from window*/} 
  const navRef = useRef();
  const iconRef = useRef();
  navRef.current = navBackground;
  iconRef.current = iconColor;

  useEffect(() => {
      const handleScroll = () => {
      const show = window.scrollY > 212

      show ? setNavBackground('navigationBarSolid') : setNavBackground('navigationBarTrans');
      show ? setIconColor(true) : setIconColor(false);
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])
  {/*End geting scroll position from window*/}

  return(
    <>

      <div className={classes.mobileRoot}>
        <AppBar position="fixed" className={classes[navRef.current]}>
          <Toolbar>
                <IconButton onClick={toggleDrawer('left',true)} aria-label = "app" className={classes.menuButton}>
                  {state.left ? <Cancel className={classes.iconButtons} style={iconRef.current ? {color: '#f74b08'} : {color: 'snow'}}/> : <Menu className={classes.iconButtons} style={iconRef.current ? {color: '#f74b08'} : {color: 'snow'}}/>}
                </IconButton>

                <div className={classes.Logo}>
                  <img src={logo} height={42} width={'auto'} draggable={false} alt="background"/>
                </div>

                <div>
                  <IconButton onClick={handleOpen} aria-label = "Search bar">
                    <Search className={classes.iconButtons} style={iconRef.current ? {color: '#f74b08'} : {color: 'snow'}}/>
                  </IconButton>

                  <IconButton aria-label = "Shoping Cart">
                    <div className={classes.Badge}>
                      <Badge badgeContent={props.shopAdded} color="primary">
                        <ShoppingBasket className={classes.iconButtons} style={iconRef.current ? {color: '#f74b08'} : {color: 'snow'}}/>
                      </Badge>
                    </div>                  
                  </IconButton>
                </div>
          </Toolbar>
        </AppBar>
        <SideNavbar State={state.left} Open={toggleDrawer('left',true)} Close={toggleDrawer('left',false)}/>  
      </div>

      <PopupSearchBar Open={open} Close={handleClose}/>

    </>
  )
}

export default Navigation;