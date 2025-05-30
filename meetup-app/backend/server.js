const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const activityRoutes = require("./routes/activities");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/activities", activityRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/meetup-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => console.error(err));
