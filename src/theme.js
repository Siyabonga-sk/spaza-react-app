import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    /*palette:{
      primary:{
          main: '#f00',
      },
    },*/

    /*breakpoints: {
        values:{
            sm: '500px',
        }
    },*/
    overrides:{
        MuiBadge:{
            badge:{
                fontWeight: 520,
                color: '#040E27',
                height: '18px',
                minWidth: '17px',
            },
            colorPrimary:{
                backgroundColor: '#f00',
            },
            anchorOriginTopRightRectangle: {
                top: '10px',
                right: '5px',
            },
        },

        // // MuiSvgIcon: {
        // //     root: {
        // //         fontSize: '1.7rem',
        // //     },
        // },
        MuiToolbar: {
            gutters: {
                paddingLeft: '5px',
                paddingRight: '10px',

                '@media (min-width: 600px)': {
                    paddingLeft: '10px',
                    paddingRight: '15px',
                },
            },

            regular: {
                minHeight: '50px',
            },
            
        },

        MuiIconButton:{
            root: {
                padding: 0,
            },
        },
    },

    props:{
        MuiIconButton:{
            disableRipple: false,
        },
    },
  
  });