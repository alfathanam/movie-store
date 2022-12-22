const { movies } = require("../models");
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
      res.json(resultMovies);
    } catch (err) {
      res.json(err);
    }
  }
  static async createPage(req, res) {
    //code
  }

  //* Untuk melihat semua data Movies
  static async listAllMovies(req, res) {
    //code
    try {
      const result = await movies.findAll();
      res.json(result);
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
        ? res.json({ message: `id ${id} has been deleted` })
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
        ? res.json({ message: `id  has been updated` })
        : res.json({ message: `id cant updated ` });
    } catch (err) {
      res.json(err);
    }
  }
  static async updatePage(req, res) {
    //code
  }
}
module.exports = MovieControllers;
