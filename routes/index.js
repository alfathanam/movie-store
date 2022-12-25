const route = require("express").Router();
const routeActors = require("./actor");
const routeMovies = require("./movie");
const routeMovieActor = require("./movieActor");

route.use("/actors", routeActors);
route.use("/movies", routeMovies);
route.use("/moviesactor", routeMovieActor);
route.get("/", (req, res) => {
  // res.send(`Hello world`);
  res.render("index.ejs");
});

module.exports = route;
