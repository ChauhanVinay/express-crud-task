const express = require('express');
const app = express();
const PORT = 3000;

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

//Custom 404 handler for invalid routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

//Start the express server
app.listen(PORT, () => {
    console.log(`Server running on http: //localhost:${PORT}`);
});