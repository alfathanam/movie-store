const { movieActor, movies, actors } = require("../models");
class MovieActorController {
  static async listMovieActor(req, res) {
    try {
      const result = await movieActor.findAll({
        include: [movies, actors],
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async create(req, res) {
    try {
      const { movieId, actorId } = req.body;
      const result = await movieActor.create({
        movieId: +movieId,
        actorId: +actorId,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = MovieActorController;
