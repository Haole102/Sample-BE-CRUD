const express = require("express");
const app = express();

const indexRoutes = require("./routes/indexRoutes");
const connectDB = require("./config/mongoose");
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.use("/", indexRoutes);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exitCode = 1;
  });
