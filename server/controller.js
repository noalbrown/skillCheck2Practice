let id = somename[backpack.length - 1].id + 1

module.exports = {
  create: (req, res) => {
    const db = req.app.get('db');
    const { name, description } = req.body;

    db.create_somename([name, description])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  getOne: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.read_somename(id)
      .then(somename => res.status(200).send(somename))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  getAll: (req, res) => {
    const db = req.app.get('db');

    db.read_somenames()
      .then(somenames => res.status(200).send(somenames))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  update: (req, res) => {
    const db = req.app.get('db');
    const { params, query } = req;

    db.update_somename([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  delete: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_somename(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Could not delete' });
        console.log(err)
      });
  },

  resetBackpack: (req, res) => {
    somename = [...emptySomename]
    console.log(emptySomename)
    res.status(200).send(somename)
  }
};