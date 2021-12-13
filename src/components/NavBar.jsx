import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Tabs, Tab} from '@material-ui/core'
import { alpha } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu'
import benjamin from './images/benjamin.png'


const useStyles = makeStyles(theme =>({
    root: {
        width: '100%',
      },
      grow: {
        flexGrow: 1,
      },
    AppBar:{
        margintop: 30,
        position:"sticky"
    },
    offset: theme.mixins.toolbar,
    menuButton:{
        marginRight: theme.spacing(2)
    },
    buttonNav:{
        '&:hover': {
            col: alpha(theme.palette.common.white, 0.25),
          }
    }    
}))


const Navbar = () => {
    
    const classes= useStyles()
    return (
        <div className={classes.root}>
             <img src={benjamin} alt="" />
            <AppBar position='static' color='primary' className="AppBar">
                <Toolbar>
                    <IconButton color='inherit'  className={classes.menuButton} >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' >
                        BENJAMIN PETSHOP
                    </Typography>
                    <div className={classes.grow} />
                    
                    <Tabs
                        className="menu"
                    >
                        <Tab label="Jugueteria" className={classes.buttonNav} />
                        <Tab label="Accesorios" className={classes.buttonNav} />
                        <Tab label="Alimento para Mascotas" className={classes.buttonNav} />
                    </Tabs>
                </Toolbar>
                
            </AppBar>
            <div className={classes.offset}></div>
               
        </div>
    )
}



export default Navbar
