const cors = require("cors");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var app = express();
var mongoose = require("mongoose")

//constantes para conexão no banco de dados
const DATABASE_USER = process.env.DB_USER || "root";
const DATABASE_PASSWORD = process.env.DB_PASSWORD || "";
const DATABASE_NAME = process.env.DATABASE || "site-caridade";
const URL_DATABASE = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@site-caridade.jrgob.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

console.log(URL_DATABASE);


mongoose.connect(URL_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log("conectou");

app.use(cors());

//variável para acessar as rotas
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
