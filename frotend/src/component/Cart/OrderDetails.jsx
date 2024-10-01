import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Dialog,DialogTitle,DialogContent,DialogActions, Button} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  rootPayment: {
    width: "100%",
    display: "flex",
    gap: "2.5rem",
    padding: ".5rem 0rem .5rem 0rem",
    },
  image: {
    width: "180px",
    height: "230px",
    objectFit: "cover",
    marginLeft: "-10px", 
    [theme.breakpoints.down(899)]: {
      width: "255px",
      height: "240px",
    },
  },
  details: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: "-20px",
  },
  productName: {
    fontWeight: "500",
    fontSize: "18px",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down(899)]:{
      fontSize:"12px",
    }
  },
  quantity: {
    fontSize: 16,
    marginBottom: theme.spacing(1),
    color: "#00000080",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
  },
  finalPrice: {
    fontWeight: 400,
    fontSize: 16,
  },
  discountPrice: {
    textDecoration: "line-through",
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2),
    fontSize: 16,
  },
  paymentStatus: {
    color: "green",
    fontSize: 16,
    marginTop: theme.spacing(1),
  },
  paymentValue: {

    fontWeight: 400,
    marginRight: "10px",
    color: "#00000080",
  },
}));

const OrderDetailsSection = ({ item, totalDiscount, totalPrice }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hasCustomMeasurements = Object.keys(item.measurements || {}).length > 0;
  const hasSize = Boolean(item.size);


  return (
    <div className={classes.rootPayment}>
      <img src={item.image} alt={item.name} className={classes.image} />
      <div className={classes.details}>
        <Typography variant="subtitle1" className={classes.productName}>
          {item.name}
        </Typography>

        {!hasCustomMeasurements && (
          // Only display size information if custom tailoring data is not available
          <Typography variant="body2" className={classes.quantity}>
            <span
              style={{ fontWeight: 400, marginRight: "10px", color: "#00000080" }}
            >
              Size:
            </span>{" "}
            {item.size}
          </Typography>
        )}
        <Typography variant="body2" className={classes.quantity}>
          <span
            style={{ fontWeight: 400, marginRight: "10px", color: "#00000080" }}
          >
            Quantity:
          </span>{" "}
          {item.quantity}
        </Typography>
        <div className={classes.priceContainer}>
          <Typography variant="body2" className={classes.finalPrice}>
            {totalDiscount}
          </Typography>
          <Typography variant="body2" className={classes.discountPrice}>
          {totalPrice}
          </Typography>
        </div>
        {/* <div>
          <Typography variant="body2" className={classes.paymentStatus}>
            <span className={classes.paymentValue}>Payment:</span> Paid
          </Typography>
        </div> */}
        {!hasSize && (<Button variant="outlined" color="primary" onClick={handleClickOpen}>
              View Custom Details
        </Button>)}
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
      </div>
    </div>
  );
};

export default OrderDetailsSection;
