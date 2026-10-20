const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Middleware to parse incoming JSON request bodies
app.use(express.json());

//Import route
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

//Home route
app.get("/", (req, res) => {
    res.send('Welcome to the Student & Course Portal API!');
});

//Mount routers
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Catch-all 404 handler for undefined routes
app.use((req, res, next) => {
  const error = new Error('Page not found');
  error.statusCode = 404;
  next(error); // Pass 404 error to the central error handler
});

// Centralized Error Handling Middleware (MUST have 4 arguments and be placed last)
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

//Start the express server
app.listen(PORT, () => {
    console.log(`Server running on http: //localhost:${PORT}`);
});