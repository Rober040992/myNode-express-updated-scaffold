import { join } from "node:path";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import connectMongoose from "./lib/mongooseConfig.js";
import routes from "./routes/Routes.js";
//API controllers imports

await connectMongoose();
console.log("✅ MongoDB connected!");

const app = express();

// morgan logger for http requests logs
app.use(logger("dev"));
// transforms json objects into js objects
app.use(express.json());
// transforms data sent by a form to a js object
app.use(express.urlencoded({ extended: false }));
// set the folder where statis resources will be served
app.use(express.static(join(import.meta.dirname, "public")));
// show where static images are and where to serve them from
app.use('/images', express.static(join(import.meta.dirname, 'public/images')));

// Routing
app.use("/", routes);

app.get('/favicon.ico', (req, res) => res.status(204));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
