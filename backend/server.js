const express = require("express");
const cors = require("cors");
const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const cloudinary = require("cloudinary");
const path = require("path");
const os = require("os");
const cluster = require("cluster");

dotenv.config({ path: "backend/config/config.env" });

// Connect to MongoDB
connectDB();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const CPU_COUNT = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary process is running. Forking ${CPU_COUNT} workers...`);

  // Fork workers
  for (let i = 0; i < CPU_COUNT; i++) {
    cluster.fork();
  }

  // If a worker dies, fork a new one to replace it
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
    cluster.fork();
  });
  
} else {
  // Worker processes handle the actual application
  const PORT = process.env.PORT || 5000;

  const server = app.listen(PORT, () => {
    console.log(`Worker ${process.pid} is listening on PORT ${PORT}`);
  });

  // Handling Unhandled Promise Rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
      process.exit(1);
    });
  });

  // Handling Uncaught Exceptions
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
} 
