const routeActor = require("express").Router();
const { ActorController } = require("../controllers");
routeActor.post("/create", ActorController.create);
routeActor.get("/update", ActorController.updatePage);
routeActor.get("/", ActorController.listAllActors);
routeActor.post("/update/:id", ActorController.update);
routeActor.get("/update/:id", ActorController.updatePage);
routeActor.get("/delete/:id", ActorController.delete);

module.exports = routeActor;
