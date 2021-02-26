import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import { ProductItem } from "../types/ProductItemtypes"

import { useSelector } from "react-redux"

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);


const useStyles = makeStyles((theme) => ({
 
  root:{
    position:"sticky",
    marginBottom: "80px",
    flexGrow: 2
    
    
  },
  bar:{
    
     
    paddingLeft: "25%",
    textDecoration: "none",
   
  },
  a:{
    textDecoration: "none",
    color: "white"
  
  },
  icon:{
    flexGrow:1,
    marginLeft:"80%"
  }

}));


function NavBar() {
  const classes = useStyles();
  const products = useSelector((state: ProductItem[]) => state)
  var items= (products).filter(product => product.added).length



  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar >
        <Link style={{marginLeft:"-20%"}} className={classes.bar} to="/">    <Typography variant="h5" >
            SHOE STORE
          </Typography> </Link>
   
          <Link className={classes.icon} to="/cart"> <IconButton aria-label="cart">
      <StyledBadge badgeContent={items} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </Link>

      
   
       
        </Toolbar>
      </AppBar>
  
    </div>
  );

  


}

export default NavBar;



