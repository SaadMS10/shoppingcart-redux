import React from "react"
import { useSelector } from "react-redux"
import icon from "../images/empty-cart.png"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import {remove} from "../stores/counterSlice"
import {useDispatch} from "react-redux"
import { ProductItem } from "../types/ProductItemtypes"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "80%",
      marginLeft:"10%",
      marginTop: "50px",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    },
    listItem: {
      padding: theme.spacing(1, 0),
      justifyContent: "flex-end"
    },
    total: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 2
    }
  })
)

const Cart= () => {
  const classes = useStyles({})
  const dispatch= useDispatch()
    const products = useSelector((state: ProductItem[]) => state)
    var count = products.filter(product => product.added).length;


  return (
    <>
    {(count > 0) ? 
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom style={{marginTop: "50px"}}>
      SHOPPING CART
    </Typography>
    <Typography component="p" variant="body1">
      You have {count} items in your cart
    </Typography>
    <List className={classes.root}>
      {products
        .filter(product => product.added)
        .map((product: ProductItem) => (
          <React.Fragment key={product.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Product" src={product.img} />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                  &#8360; {product.price}
                    </Typography>
                    {` — ${product.alt}`}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(remove(product))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      <ListItem className={classes.listItem}>
          {(count > 0) ?   <Typography variant="subtitle1" className={classes.total}>
            TOTAL :
            &#8360; {(
            products
              .filter(product => product.added)
              .reduce((acc, current) => (acc += current.price), 0)  )}
        </Typography> : null }
          
     
      </ListItem>
    </List> </> : <img src={icon} alt="Cart Is Empty" />  }
    
     
    </>
  )
}

export default Cart;
