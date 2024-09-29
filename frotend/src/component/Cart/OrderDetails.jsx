import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Dialog,DialogTitle,DialogContent,DialogActions, Button} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  rootPayment: {
    width: "100%",
    display: "flex",
    gap: "2.5rem",
    padding: "1rem 0rem 0rem 0rem",
    },
  image: {
    width: "155px",
    height: "140px",
    objectFit: "cover",
    [theme.breakpoints.down(899)]: {
      width: "255px",
      height: "240px",
    },
  },
  details: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  productName: {
    fontWeight: "500",
    fontSize: "18px",
    marginBottom: theme.spacing(1),
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
            {totalPrice}
          </Typography>
          <Typography variant="body2" className={classes.discountPrice}>
            {totalDiscount}
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
          <Typography variant="body2">Shoulder: {item.measurements?.Shoulder || "N/A"}</Typography>
          <Typography variant="body2">Waist to Knee: {item.measurements?.WaistToKnee || "N/A"}</Typography>
          <Typography variant="body2">Chest: {item.measurements?.Chest || "N/A"}</Typography>
          <Typography variant="body2">Knee Line: {item.measurements?.KneeLine || "N/A"}</Typography>
          <Typography variant="body2">Front Shoulder to Waist: {item.measurements?.FrontShoulderToWaist || "N/A"}</Typography>
          <Typography variant="body2">Neck Circumference: {item.measurements?.NeckCircumference || "N/A"}</Typography>
          <Typography variant="body2">Waist: {item.measurements?.Waist || "N/A"}</Typography>
          <Typography variant="body2">Nape to Waist: {item.measurements?.NapeToWaist || "N/A"}</Typography>
          <Typography variant="body2">Arm Length: {item.measurements?.ArmLength || "N/A"}</Typography>
          <Typography variant="body2">Back Width: {item.measurements?.BackWidth || "N/A"}</Typography>
          <Typography variant="body2">Hip: {item.measurements?.Hip || "N/A"}</Typography>
          <Typography variant="body2">Top Arm Circumference: {item.measurements?.TopArmCircumference || "N/A"}</Typography>
          <Typography variant="body2">Crotch Depth: {item.measurements?.CrotchDepth || "N/A"}</Typography>
          <Typography variant="body2">Waist to Floor: {item.measurements?.WaistToFloor || "N/A"}</Typography>
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
