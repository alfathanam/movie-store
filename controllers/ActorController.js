const { actors } = require("../models");
class ActorController {
  //code
  //* Create Actors
  static async create(req, res) {
    try {
      const { name, age, address, image } = req.body;
      const resultActor = await actors.create({
        name,
        age,
        address,
        image,
      });
      res.json(resultActor);
    } catch (err) {
      res.json(err);
    }
  }

  static async createPage(req, res) {
    //code
  }

  //*Get all Actors
  static async listAllActors(req, res) {
    try {
      const result = await actors.findAll({
        order: [[`id`, `asc`]],
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  //* Update Actor
  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, age, address, image } = req.body;
      const resultActor = await actors.update(
        {
          name,
          age,
          address,
          image,
        },
        {
          where: { id },
        }
      );
      resultActor[0] === 1
        ? res.json({ message: `id ${id} has been updated` })
        : res.json({ message: `id ${id}  cant be updated` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    //code
  }

  //* Delete Actor
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const resultActor = await actors.destroy({
        where: { id },
      });
      resultActor === 1
        ? res.json({ message: `id ${id} has been deleted` })
        : res.json({ message: `id ${id} not found` });
    } catch (err) {
      res.json(err);
    }
  }
}
module.exports = ActorController;
