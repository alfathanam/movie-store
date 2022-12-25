const { movies, actors } = require("../models");
class MovieControllers {
  //* Create movies
  static async create(req, res) {
    try {
      const { name, release, genre, image } = req.body;
      const resultMovies = await movies.create({
        name,
        release,
        genre,
        image,
      });
      res.redirect("/movies");
    } catch (err) {
      res.json(err);
    }
  }
  static async createPage(req, res) {
    //code
    res.render("addPage.ejs");
  }

  //* Untuk melihat semua data Movies
  static async listAllMovies(req, res) {
    //code
    try {
      const result = await movies.findAll({
        include: [actors],
      });
      // const resultActor = await actors.findAll({});
      // res.json(result);
      res.render("movies.ejs", { movies: result });
    } catch (err) {
      res.json(err);
    }
  }

  //*delete movies
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const resultMovie = await movies.destroy({
        where: { id },
      });
      resultMovie === 1
        ? res.redirect("/movies")
        : res.json({ message: `id ${id} not found` });
    } catch (err) {
      res.json(err);
    }
  }

  //* update movies
  static async updateMovie(req, res) {
    try {
      const id = req.params.id;
      const { name, release, genre, image } = req.body;
      const resultMovie = await movies.update(
        {
          name,
          release,
          genre,
          image,
        },
        {
          where: { id },
        }
      );

      resultMovie[0] === 1
        ? res.redirect("/movies")
        : res.json({ message: `id cant updated ` });
    } catch (err) {
      res.json(err);
    }
  }
  static async updatePage(req, res) {
    //code
    try {
      const id = +req.params.id;
      const moviesList = await movies.findAll({
        where: { id },
      });

      // res.json(companyList);
      res.render("update.ejs", { moviesList });
    } catch (err) {
      res.json({ message: err.message });
    }
  }
}
module.exports = MovieControllers;
