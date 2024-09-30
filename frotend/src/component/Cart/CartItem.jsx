import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Input,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/DisplayMoney";
// import { height, width } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  roots11: {
    display: "flex",
    alignItems: "center",
    padding: "1.5rem 2rem",
    width: "fit-content",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    margin: "1rem 2rem",
    height: "auto",

    [theme.breakpoints.down(899)]: {

    },
    [theme.breakpoints.down(699)]: {
    },
    [theme.breakpoints.down(499)]: {
    },
  },
  root11: {
    display: "flex",
    alignItems: "center",
    padding: "1rem 1rem",
    width: "fit-content",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    margin: "1rem 2rem",
    height: "auto",
  },
  media: {
    width: "250px",
    height: "290px",
    marginRight: "16px",

    [theme.breakpoints.down(699)]: {
      width:"140px",
      height:"200px",
      marginRight:"5px", 
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "fit-content",

    [theme.breakpoints.down(699)]: {
      padding: "0",
      width: "fit-content",
    },
    [theme.breakpoints.down(599)]: {
      padding: "0",
      width: "fit-content",
    },
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  title: {
    width: "90%",
    fontSize: "1rem",
    fontWeight: 600,
    marginLeft: "1rem",
    [theme.breakpoints.down(599)]: {
      fontSize: "10px",
      marginLeft: "0",
    },
    "& .MuiTypography-subtitle1 ": {
      [theme.breakpoints.down(599)]: {
        fontSize: "14px",
      },
    },
  },
  title2: {
    width: "90%",
    fontSize: "1rem",
    fontWeight: 400,
    marginLeft: "1rem",
    [theme.breakpoints.down(599)]: {
      fontSize: "14px",
      marginLeft: "0",
    },
    "& .MuiTypography-subtitle1 ": {
      [theme.breakpoints.down(599)]: {
        fontSize: "14px",
      },
    },
  },

  cartDeleteIcon: {
    color: "black",
    marginTop: "-.5rem",

    [theme.breakpoints.down(599)]: {
      marginRight: "-2.5rem",
    },
    "&:hover": {
      color: "#ed1c24",
    },
    [theme.breakpoints.down(499)]: {
      marginRight: "-2rem",
    },
  },

  priceItem: {
    display: "flex",
    alignItems: "baseline",
    gap: "1rem",
    marginLeft: "1.2rem",
    [theme.breakpoints.down(599)]: {
      marginLeft: "0rem",
      marginRight: "-1rem",
    },
  },

  cartSubHeadings: {
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "#414141",
    [theme.breakpoints.down(599)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down(499)]: {
      fontSize: "12px",
    },
  },
  itemPrice: {
    fontSize: "16px",
    fontWeight: 400,
    [theme.breakpoints.down(599)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down(499)]: {
      fontSize: "13px",
    },
  },
  itemOldPrice: {
    marginLeft: "-8px",
    fontSize: "14px",
    fontWeight: 400,

    [theme.breakpoints.down(499)]: {
      fontSize: "12px",
    },
  },

  contentBottom: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
    alignItems: "baseline",
    width: "fit-content",
    flexDirection: "column",
    [theme.breakpoints.down(599)]: {
      marginLeft: "0rem",
      marginRight: "-1rem",
    },
    [theme.breakpoints.down(550)]: {
      position: "relative",
      marginLeft: "0rem",
    },
  },
}));

function CartItem({
  deleteCartItems,
  item,
  decreaseQuantity,
  increaseQuantity,
  length,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // console.log('CartItem Data:', item);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hasCustomMeasurements = Object.keys(item.measurements || {}).length > 0;
  const hasSize = Boolean(item.size); 

  // Calculate price after discount
  let finalPrice = generateDiscountedPrice(item.price, item.discount);
  let discountedPrice = item.price;
  discountedPrice = dispalyMoney(discountedPrice);
  let total = finalPrice * item.quantity;
  total = dispalyMoney(total);
  finalPrice = dispalyMoney(finalPrice);

  return (
    <>
      <Card className={classes.roots11}>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent className={classes.content}>
          <div className={classes.contentTop}>
            <div className={classes.cartHeader}>
              <Typography variant="subtitle1" className={classes.title}>
                {item.name.split(" ").slice(0, 2).join(" ") + "..."}
              </Typography>

              <IconButton
                aria-label="delete"
                className={classes.cartDeleteIcon}
                onClick={() => deleteCartItems(item.productId)}
              >
                <DeleteIcon />
              </IconButton>
            </div>

            <div className={classes.priceItem}>
              <Typography className={classes.cartSubHeadings} variant="body2">
                Price:
              </Typography>
              <Typography variant="subtitle1" className={classes.itemPrice}>
                {finalPrice}
              </Typography>
              <Typography
                variant="caption"
                component="span"
                color="black"
                className={classes.itemOldPrice}
              >
                <del>{discountedPrice}</del>
              </Typography>
            </div>
          </div>

          <div className={classes.contentBottom}>
            <div className={classes.cartHeader}>
            {!hasSize && (<Button variant="outlined" color="primary" onClick={handleClickOpen}>
              View Custom Details
            </Button>)}
            
            {!hasCustomMeasurements && (<div className="prod_details_additem">
              <h5>Size:</h5>
              <div className="additem">
                {item.size ? (
                  <Typography variant="body2" className={classes.title2}>
                    {item.size}
                  </Typography>
                ) : (
                  <h5 style={{ fontWeight: "300", fontSize: 16 }}>
                    Please select a size
                  </h5>
                )}
              </div>
            </div>)}
            </div>
            <div className="prod_details_additem">
              <h5>QTY:</h5>
              <div className="additem">
                <Input
                  readOnly
                  type="number"
                  value={item.quantity}
                  className="input"
                />
              </div>
            </div>

            <div className={classes.priceItem}>
              <Typography variant="body2" className={classes.cartSubHeadings}>
                TOTAL:
              </Typography>
              <Typography variant="subtitle1" className={classes.price}>
                {total}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Custom Tailored Details</DialogTitle>
        <DialogContent>
        <Typography variant="body2">Length(लंबाई): {item.measurements?.Length || "N/A"}</Typography>
          <Typography variant="body2">Shoulder(कंधा): {item.measurements?.shoulder || "N/A"}</Typography>
          <Typography variant="body2">Chest(छाती): {item.measurements?.chest || "N/A"}</Typography>
          <Typography variant="body2">Stomach(पेट): {item.measurements?.stomach || "N/A"}</Typography>
          <Typography variant="body2">Sleeves(आस्तीन): {item.measurements?.sleeves || "N/A"}</Typography>
          <Typography variant="body2">Hip: {item.measurements?.Hip || "N/A"}</Typography>
          <Typography variant="body2">Traousers length(पतलून की लंबाई): {item.measurements?.traouserLength || "N/A"}</Typography>
          <Typography variant="body2">Waist(कमर): {item.measurements?.waist || "N/A"}</Typography>
          <Typography variant="body2">Trouser Hip: {item.measurements?.trouserHip || "N/A"}</Typography>
          <Typography variant="body2">Thigh(जाँघ): {item.measurements?.thigh || "N/A"}</Typography>
          <Typography variant="body2">Knee(घुटना): {item.measurements?.knee || "N/A"}</Typography>
          <Typography variant="body2">Hem(मोहरी): {item.measurements?.hem || "N/A"}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CartItem;
