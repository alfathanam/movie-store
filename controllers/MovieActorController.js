const { movieActor, movies, actors } = require("../models");
class MovieActorController {
  static async listMovieActor(req, res) {
    try {
      const result = await movieActor.findAll({
        include: [movies, actors],
      });
      // res.json(result);
      let resultActor = result.map((e) => {
        // let dataMovie = e.movie.dataValues;
        let dataActor = e.actor.dataValues;
        // const {
        //   name: actorName,
        //   age,
        //   address,
        //   image: imageActor,
        // } = e.actor.dataValues;
        return dataActor;
      });

      let resultMovie = result.map((e) => {
        let dataMovie = e.movie.dataValues;

        return dataMovie;
        // console.info(dataMovies);
      });

      res.render("showMovies.ejs", { resultActor, resultMovie });
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
