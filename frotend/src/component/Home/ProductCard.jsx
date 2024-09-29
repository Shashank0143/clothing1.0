import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
// import Rating from "@material-ui/lab/Rating";
import { FitScreen } from "@mui/icons-material";
import  { Link, useHistory } from "react-router-dom";
import {dispalyMoney  ,generateDiscountedPrice} from "../DisplayMoney/DisplayMoney"
// import { fontSize, fontWeight, height, margin } from "@mui/system";
// import { addItemToCart } from "../../actions/cartAction";
// import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "260px",
    height: FitScreen,
    margin: theme.spacing(1),
    backgroundColor: "white",
    currsor: "pointer",
    [theme.breakpoints.down(768)]: {
      width:"180px",
      marginLeft: theme.spacing(.3),
      marginRight: theme.spacing(.2),
      marginTop: theme.spacing(.1),
      marginBottom: theme.spacing(1),
      
    },
  },
  media: {
    height: 310,
    width: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease", // Smooth zoom effect
    "&:hover": {
      transform: "scale(1.1)", // Zoom in on hover
    },
    [theme.breakpoints.down(768)]: {
      height: 220,
    }

   },
  button: {
    backgroundColor: "#07161D",
    color: "white",
    borderRadius: 4,
    fontWeight: "bold",
    width: "100%",
    height: 45,
    "&:hover": {
      backgroundColor: "#ed1c24",
      color: "black",
      fontWeight: "bold",
    },
    [theme.breakpoints.down(768)]:{
      height:30,
      fontSize:".7rem",
    },
  },
  oldPrice: {
    textDecoration: "line-through",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.6)",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down(768)]:{
      fontSize:".7rem",
    }
  },
  finalPrice: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    [theme.breakpoints.down(768)]:{
      fontSize:".8rem",
    }
  },
  description: {
    fontSize: "0.8rem",
    fontWeight: 500, 
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
}));

const ProductCard = ({ product }) => {
  // const dispatch = useDispatch();
  const classes = useStyles();
    let discountPrice = generateDiscountedPrice(product.price, product.discount);
    discountPrice = dispalyMoney(discountPrice);
  const oldPrice = dispalyMoney(product.price);
  
  // const truncated =
  //   product.description
  //     .split(" ")
  //     .slice(0, 5)
  //     .join(" ") + "...";
      const  nameTruncated = product.name.split(" ").slice(0, 2).join(" ") + "...";


      // const addTocartHandler = (id , qty) => {
      //   dispatch(addItemToCart(id , qty))
      // }
      const navigate =  useHistory()

  return (
    <Card className={classes.root}>
      <Link
        className="productCard"
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={product.images[0].url} />
          <CardContent>
            <Typography
              gutterBottom
              color="black"
              fontWeight="bold"
              style={{ fontWeight: "400",fontSize:".8rem"}}
            >
              {nameTruncated}
            </Typography>
            {/* <Box display="flex" alignItems="center">
              <Rating
                name="rating"
                value={product.ratings}
                precision={0.1}
                readOnly
                size="small"
                style={{ color: "#DE7921", marginRight: 8, fontWeight: "400", fontSize:".7rem",}}
              />
              <Typography variant="body2" color="textSecondary">
                ({product.numOfReviews})
              </Typography>
            </Box> */}
            {/* <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.description}
            >
              {truncated}
            </Typography> */}
            <Box display="flex" alignItems="center">
              <Typography variant="body1" className={classes.oldPrice}>
                {oldPrice}
              </Typography>
              <Typography variant="body1" className={classes.finalPrice}>
                {discountPrice}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
      <Box display="flex" justifyContent="center" p={1.5}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={()=> navigate.push(`/product/${product._id}`)}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
