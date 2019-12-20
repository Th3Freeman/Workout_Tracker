const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const mongoose = require("mongoose");
const staticRouter = require("./routes/view-routes");
const routineRouter = require("./routes/workoutRoutineRoutes");

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbFitnessTracker", { useNewUrlParser: true });

const app = express();

//view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

//routes
app.use(staticRouter);
app.use("/api/routines", routineRouter);

//start server
    app.listen(PORT, () => {
        console.log(`==> Server listening at http://localhost:${PORT}`)
    });
