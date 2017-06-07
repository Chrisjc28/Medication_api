var ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Medication = mongoose.model('Medication')

module.exports = function(app, db) {
  app.get('/medication/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    Medication.findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  app.get('/medication', (req, res) => {
    Medication.find({}, (err, medication) => {
      res.send(medication)
    })
  });

  app.post('/medication', (req, res) => {
    const medication = new Medication({medication: req.body.body});
    medication.save((err, result) => {
      if (err) {
        console.log(err);
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result)
      }
    });
  });

  app.delete('/medication/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    Medication.remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send('medication ' + id + ' deleted!');      }
    });
  });

  app.put('/medication/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const medication = { text: req.body.body};
    Medication.update(details, medication, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(medication);
      }
    });
  });

};
