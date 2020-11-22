import  React/*, {useState}*/ from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Navigation from './components/Header/NavigationBar';
//import Search from './components/SearchBar/searchBar';
import MyShop from './components/Card/Cards';
import Header from './components/Header/header';
import Shops from './shops';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import headerImg from './Images/headerImg6.png'

const useStyles= makeStyles(theme => ({
  root: {
      backgroundImage: `url(${headerImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      /*backgroundAttachment: 'fixed',*/
      width: '100%',
      margin: 0,
      paddingBottom: '10px',
      color: '#ffff',
      textAlign: 'center',
      minHeight: '280px',
      pointerEvents:'none',
      zIndex: 1,
      position: "relative",
     
      [theme.breakpoints.up('sm')]: {
          height: '500px',
      },
    },
}));

function App () {

  const classes = useStyles();
  const shopAdded = useSelector(state => state.shopAdded);
  const dispatch = useDispatch(() => {});

  let onclick = (()=> dispatch({type: "ADD_TO_FAVE"}));
  let handleRonclick = (()=> dispatch({type: "REMOVE_FROM_FAVE"}));

  const app = (
        <React.Fragment>
          <Router>
            <>
              <div className={classes.root}/>
              <Header/>
              <Grid container direction="column">
                <Grid sm={12} item>
                  <Navigation shopAdded={shopAdded}/>
                </Grid>

                  <Switch>
                    <Route path="/" exact>
                      <Grid sm={8} item>
                      <MyShop
                        shops = {Shops} 
                        shopAdded={shopAdded} 
                        onclick = {onclick} 
                        handleRonclick={handleRonclick}
                        />
                      </Grid>
                    </Route>
                  </Switch>
              </Grid>
            </>
          </Router>
        </React.Fragment>
  )
      return app;
}

export default App;