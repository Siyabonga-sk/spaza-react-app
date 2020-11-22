import React from 'react';
import {
  Box,
  Modal, Backdrop,
  Fade, TextField, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  /*modal styles */
  modal: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  
  paper: {
    backgroundColor: theme.palette.background.paper,
    boder: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    borderRadius: '25px',
    '@media (min-width: 500px)': {
      width: 'auto',
    },
    '@media(min-width: 0px)': {
      top: '4%',
    },
    width: '140px',
    height: 'min-content',
    top: '5%',
  },

}));

function PopupSearchBar(props) {
	const classes = useStyles();
	
	return(
		<Box component='div'>
	      <Modal
	        aria-labelledby="transition-model-title"
	        aria-describedby="discription"
	        className={classes.modal}
	        open={props.Open}
	        onClose={props.Close}
	        closeAfterTransition
	        BackdropComponent={Backdrop}
	        BackdropProps={{
	          timeout: 500,
	        }}
	      >
	        <Fade in={props.Open}>
	          <Box component="div" className={classes.paper}>
	            <TextField
	              id="1"
	              label="Seach"
	              //value={}
	              //onChange={}
	              focused
	              
	            />
	            <br />
	            <TextField
	              id="2"
	              label="Chose Location"
	              //value={}
	              //onChange={}
	              style={{paddingBottom: '15px'}}
	            />
	            
	            <Button variant="outlined" fullWidth color="primary">
	              search
	            </Button>

	          </Box>
	        </Fade>

	      </Modal>
	    </Box>
	)
}

export default PopupSearchBar;