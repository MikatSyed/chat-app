const createError = require("http-errors");

//404 not found handling
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}
  
//error handler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

    res.status(err.status || 500);

    if (res.locals.html) {
        // html respons
        res.locals.title = "Error page"
        res.render("error");
      } else {
        // json response
        res.json(res.locals.error);
      }
}

module.exports = { errorHandler, notFoundHandler };
