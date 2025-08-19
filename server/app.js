const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const expenseRoutes = require("./routes/expenseRoutes");
app.use("/api/expenses", expenseRoutes);


// Middleware
app.use(cors());
app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('API running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
