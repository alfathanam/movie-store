const routeMovieActor = require("express").Router();
const { MovieActorController } = require("../controllers");
routeMovieActor.get("/", MovieActorController.listMovieActor);
routeMovieActor.post("/create", MovieActorController.create);
module.exports = routeMovieActor;
