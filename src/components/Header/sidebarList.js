import React from 'react';
import { Cancel, Inbox, Home, Mail, ShoppingBasket} from '@material-ui/icons';
//import { withRouter } from 'react-router-dom';

const sideNavbarList = [
    {
        text: 'Home',
        icon: <Home/>,
        // onClick: () => history.push('/'),//toggleDrawer("left", false),
    },
    {
        text: 'Account',
        icon: <Inbox/>,
        // onClick: () => history.push('/'),
    },
    {
        text: 'wish list',
        icon: <ShoppingBasket/>,
        // onClick: () => history.push('/'),
    },
    { 
        text: 'Log in',
        icon: <Mail/>,
        // onClick: () => history.push('/'),
    },
  ];

  export default sideNavbarList;