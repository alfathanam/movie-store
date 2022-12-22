const routeMovie = require("express").Router();
const { MovieController } = require("../controllers");
routeMovie.post("/create", MovieController.create);
routeMovie.get("/create", MovieController.createPage);
routeMovie.get("/", MovieController.listAllMovies);
routeMovie.post("/update/:id", MovieController.updateMovie);
routeMovie.get("/update/:id", MovieController.updatePage);
routeMovie.get("/delete/:id", MovieController.delete);
module.exports = routeMovie;
