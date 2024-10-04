const asyncWrapper = require("../middleWare/asyncWrapper");
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

exports.isAuthentictedUser = asyncWrapper(async (req, res, next) => {
    const { token } = req.cookies;

    // console.log("Token from cookies:", token); // Log the token to ensure it's being received

    // If there is no token found
    if (!token) {
        // req.user.id = null;
        console.log("No token found, sending 401 error");
        return next(new ErrorHandler("Please log in to access this resource", 401));
    }

    try {
        // Verify the token with the secret key
        const deCodeToken = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("Decoded Token:", deCodeToken); // Log the decoded token to verify it's correct

        // Fetch the user by ID from the decoded token
        const user = await userModel.findById(deCodeToken.id);
        if (!user) {
            console.log("User not found, sending 404 error");
            return next(new ErrorHandler("User not found", 404));
        }

        req.user = user; // Now we have user in req.user
        // console.log("User authenticated successfully:", user);
        next();
    } catch (error) {
        console.log("Error during authentication:", error.message);
        // Handle invalid token or token expiration errors
        return next(new ErrorHandler("Invalid token, please login again", 401));
    }
});




      // taking role as param and converting it into array using spread operator. for using array method

// exports.isAuthentictedUser = asyncWrapper(async (req, res, next) => {
//         const { token } = req.cookies;
//         if (!token) {
//           return next(new ErrorHandler("Please Login to access this resource", 401));
//         }
      
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await userModel.findById(decodedToken.id);
      
//         req.user = user;
//         next();
// });

exports.authorizeRoles = (...roles) =>{
 return (req , res , next) =>{
     if (roles.includes(req.user.role) ===false){ 
        return next(
            new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resouce `,
                403)
        )
     }
   
    next();
 }
}  