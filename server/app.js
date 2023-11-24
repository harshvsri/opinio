var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");

var indexRouter = require("./routes/index");

var app = express();

// database connection setup
mongoose.connect("mongodb://127.0.0.1:27017/opinioDB");
mongoose.connection.once("open", function () {
  console.log("Connected to MongoDB");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* enable Cross-Origin Resource Sharing (CORS) with all origins,
the "*" means that any site can fetch our resources, not just the same origin. */
app.use(cors("*"));
/* set up morgan as the logging middleware,
this will log HTTP requests to the console for debugging. */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
