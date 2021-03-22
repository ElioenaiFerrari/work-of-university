class RestController {
  constructor(model) {
    this.model = model;
  }

  async findAll(req, res, next) {
    try {
      const models = await this.model.findAll(req.query);

      return res.status(200).json(models);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }

  async findOne(req, res, next) {
    try {
      const model = await this.model.findOne({ where: { id: req.params.id } });

      return res.status(200).json(model);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }

  async update(req, res, next) {
    try {
      const model = await this.model.update(req.body, {
        where: { id: req.params.id },
      });

      return res.status(200).json(model);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }

  async delete(req, res, next) {
    try {
      const model = await this.model.destroy({
        where: { id: req.params.id },
      });

      return res.status(200).json(model);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }
}

module.exports = { RestController };
