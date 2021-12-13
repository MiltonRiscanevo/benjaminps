import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Images from "../images.json"
import {InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { alpha } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: "flex",
    overflow: 'auto',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    width: "90%",
    height: "100%",   
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    margin: 'auto',
    paddingBottom: 10,
    display: 'block',
    maxWidth: '50%',
    maxHeight: '100%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        backgroundColor: '#AEB6BF' ,
      },
  },
searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
  },
});
 
function TitlebarGridList(props) {
  const {classes} = props;
  const [searchTerm, setSearchterm] = useState("")

     const data = Images.filter((e)=>{
        if (searchTerm === "") {
             return e;
         }else if (e.title.toLowerCase().includes(searchTerm.toLowerCase())){
             return e; 
         }
     }).map((e)=>{
        return e; 
     })
     console.log(data)
 
  return (
      <div className={classes.root}>
         <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                onChange={(e) => setSearchterm(e.target.value)}
            />

        </div>
        <Grid className={classes.gridList} cols={3}  >
            {new Array(data.map((val,key) => (
                <GridListTile key={val.img}>
                    <img src={val.img} alt={val.title} className={classes.img}  />
                    <GridListTileBar
                      title={val.title}
                      subtitle={<span>price: {val.valor}</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
              </GridListTile>
            )))}
      </Grid> 
      </div>
    
      
  
  );
}


export default withStyles(styles)(TitlebarGridList);