const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to parse incoming JSON request bodies
app.use(express.json());

//Import route
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

//Home route
app.get("/", (req, res) => {
    res.send('Welcome to the Student & Course Portal API!');
});

//Mount routers
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

//Custom 404 handler for invalid routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

//Start the express server
app.listen(PORT, () => {
    console.log(`Server running on http: //localhost:${PORT}`);
});